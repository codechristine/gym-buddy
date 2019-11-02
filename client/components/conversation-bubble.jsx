import React from 'react';

class ConversationBubble extends React.Component {
  render() {
    let bubbleClass, imgSource, messageClass, imageClass;
    const messageInfo = this.props.messageInfo;
    const senderId = messageInfo.senderid;
    const currentUserId = this.props.currentUser.id;
    const currentUserPhoto = this.props.currentUserPhoto;
    const friendPhoto = this.props.friendPhoto;
    const messageVal = messageInfo.messageval;
    if (senderId === currentUserId) {
      imgSource = currentUserPhoto;
      bubbleClass = 'bubble__user';
      messageClass = 'message__user';
      imageClass = 'image__user';
    } else {
      imgSource = friendPhoto;
      bubbleClass = 'bubble__friend';
      messageClass = 'message__friend';
      imageClass = 'image__friend';
    }

    if (!imgSource) {
      imgSource = 'https://static.thenounproject.com/png/538846-200.png';
    }

    return (
      <div className={`bubble__container ${bubbleClass}`}>
        <img src={imgSource} className={`bubble__image ${imageClass}`}/>
        <div className={`bubble__container-message ${messageClass}`}>
          { messageVal }
        </div>
      </div>
    );
  }
}

export default ConversationBubble;
