import React from 'react';
import ConversationBubble from './conversation-bubble';

class MessageConversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messageArr: [] };
  }
  componentDidMount() {
    fetch(`/api/conversation.php?userId=${this.props.view.params.currentUserId}&friendId=${this.props.view.params.friendId}`)
      .then(result => result.json())
      .then(result => {
        this.setState({ messageArr: result });
      });
  }
  render() {
    let element;
    const { messageArr } = this.state;
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
        <div className="conversation__container-message">
          { element }
        </div>
        <div className="conversation__container-input">

        </div>
      </div>
    );
  }
}

export default MessageConversation;
