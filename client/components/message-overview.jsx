import React from 'react';

class MessageOverview extends React.Component {
  render() {
    const friendInfo = this.props.friendInfo;
    let photo = friendInfo.photo;
    const lastMessage = friendInfo.totalMessage[friendInfo.totalMessage.length - 1];
    const toggleView = () => this.props.toggleView('conversation', friendInfo);
    if (!photo) {
      photo = 'https://static.thenounproject.com/png/538846-200.png';
    }

    return (
      <div className="message__card" onClick={toggleView}>
        <div className="message__photo">
          <img src={photo} alt={`${friendInfo.username}'s Photo`} className="message__picture"/>
        </div>
        <div className="message__info">
          <div className="message__info-username">
            { friendInfo.username }
          </div>
          <div className="message__info-last-message">
            { lastMessage }
          </div>
        </div>
      </div>
    );
  }
}

export default MessageOverview;
