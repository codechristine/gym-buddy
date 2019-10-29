import React from 'react';
import Header from './header';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messageArr: [] };
  }
  render() {
    return (
      <div className="main__container">
        <Header name={this.props.view.name} prevName={this.props.view.prevName} setView={this.props.setView} currentUser={this.props.currentUser}/>
        <div className="main__body">
          <div className="message__container">
          </div>
        </div>
      </div>
    );
  }
}

export default MessageList;

/*
SELECT m.receiverid AS currentUserId, m.senderid as friendId, u.username, GROUP_CONCAT(messageval) as totalMessage FROM `messages` as m LEFT JOIN (SELECT * FROM `user`) as u ON m.senderid = u.id WHERE m.receiverid = 1 GROUP BY senderid
*/
