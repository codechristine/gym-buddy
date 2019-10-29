import React from 'react';

class MessageConversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messageArr: [] };
  }
  render() {
    const backMethod = () => this.props.toggleView('list', {});
    return (
      <div className="conversation__container">
        <div className="conversation__container-button">
          <button className="btn message__button" onClick={backMethod}><i className="far fa-envelope"></i></button>
        </div>
        <div className="conversation__container-message">

        </div>
        <div className="conversation__container-input">

        </div>
      </div>
    );
  }
}

export default MessageConversation;
