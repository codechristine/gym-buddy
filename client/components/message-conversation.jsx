import React from 'react';
import ConversationBubble from './conversation-bubble';
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
    fetch(`/api/conversation.php?userId=${this.props.view.params.currentUserId}&friendId=${this.props.view.params.friendId}`)
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

    const messageObj = {
      senderId: this.props.view.params.currentUserId,
      receiverId: this.props.view.params.friendId,
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
    const backMethod = () => this.props.toggleView('list', {});
    const friendUserName = this.props.view.params.username;
    if (!messageArr.length) {
      element = <div>No Conversation</div>;
    } else {
      element = this.state.messageArr.map((element, index) => {
        return <ConversationBubble key={index} messageInfo={element} params={this.props.view.params} currentUserPhoto={this.props.currentUser.photo} friendPhoto={this.props.view.params.photo} />;
      });
    }
    return (
      <div className="conversation__container">
        <div className="conversation__container-button">
          <i className="message__icon fas fa-chevron-left" onClick={backMethod}></i>
          <div className="conversation__container-friend-username">
            { friendUserName }
          </div>
        </div>
        <div className="conversation__container-message" id="messageContainer">
          { element }
        </div>
        <div className="conversation__container-input">
          <form className="conversation__form" onSubmit={this.handleSubmit}>
            <input value={messageVal} type="text" name="message" className="conversation__input" placeholder="Enter message here" onChange={this.handleChange}/>
            <button type="submit" className="btn message__button"><i className="fas fa-reply"></i></button>
          </form>
        </div>
      </div>
    );
  }
}

export default MessageConversation;
