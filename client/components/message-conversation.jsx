import React from 'react';
import ConversationBubble from './conversation-bubble';
import Header from './header';
import { animateScroll } from 'react-scroll';

class MessageConversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageArr: [],
      messageVal: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.getAllMessages();
    this.scrollToBottom();
  }
  componentDidUpdate() {
    animateScroll.scrollToBottom({ duration: 1000, containerId: 'messageContainer' });
  }
  scrollToBottom() {
    animateScroll.scrollToBottom({ duration: 1000, containerId: 'messageContainer' });
  }
  getAllMessages() {
    const userId = this.props.currentUser.id;
    const friendId = this.props.view.params.friendId || this.props.view.params.id;
    fetch(`/api/conversation.php?userId=${userId}&friendId=${friendId}`)
      .then(result => result.json())
      .then(result => {
        this.setState({ messageArr: result });
      });
  }
  resetForm() {
    this.setState({ messageVal: '' });
  }
  handleChange(event) {
    this.setState({ messageVal: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.messageVal) {
      return;
    }

    const messageObj = {
      senderId: this.props.currentUser.id,
      receiverId: this.props.view.params.friendId || this.props.view.params.id,
      messageVal: this.state.messageVal
    };

    fetch('/api/conversation.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(messageObj) })
      .then(result => result.json())
      .then(result => {
        if (result.success) {
          this.getAllMessages();
          this.resetForm();
        }
      });

  }
  render() {
    let element;
    const { messageArr, messageVal } = this.state;
    const friendUserName = this.props.view.params.username;
    if (!messageArr.length) {
      element =
      <div className="conversation__none">
        No Conversaton yet. Start one!
      </div>;
    } else {
      element = this.state.messageArr.map((element, index) => {
        return <ConversationBubble key={index} messageInfo={element} currentUser={this.props.currentUser} params={this.props.view.params} currentUserPhoto={this.props.currentUser.photo} friendPhoto={this.props.view.params.photo} />;
      });
    }
    return (
      <div className="main__container">
        <Header name={this.props.view.name} prevName={this.props.view.prevName} setView={this.props.setView} currentUser={this.props.currentUser} element={this.props.view.params}/>;
        <div className="conversation__container">
          <div className="conversation__container-button">
            <div className="conversation__container-friend-username">
              {friendUserName}
            </div>
          </div>
          <div className="conversation__container-message" id="messageContainer">
            {element}
          </div>
          <div className="conversation__container-input">
            <form className="conversation__form" onSubmit={this.handleSubmit}>
              <input value={messageVal} type="text" name="message" className="conversation__input" placeholder="Enter message here" onChange={this.handleChange} autoComplete="off"/>
              <button type="submit" className="btn message__button"><i className="fas fa-reply"></i></button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageConversation;
