import React from 'react';
import Header from './header';
import MessageOverview from './message-overview';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageArr: []
    };
  }
  componentDidMount() {
    fetch(`/api/message.php?userId=${this.props.currentUser.id}`)
      .then(result => result.json())
      .then(result => {
        this.setState({ messageArr: result });
      });
  }
  render() {
    let element;
    const { messageArr } = this.state;

    if (!messageArr.length) {
      element =
        <div className="message__empty">
          Inbox Empty
        </div>;
    } else {
      element = this.state.messageArr.slice(0).reverse().map((element, index) => {
        return <MessageOverview key={index} friendInfo={element} toggleView={this.toggleView} setView={this.props.setView}/>;
      });
    }

    return (
      <div className="main__container">
        <Header name={this.props.view.name} prevName={this.props.view.prevName} setView={this.props.setView} currentUser={this.props.currentUser}/>
        <div className="main__body">
          <div className="message__container">
            { element }
          </div>
        </div>
      </div>
    );
  }
}

export default MessageList;
/*
SELECT * FROM `messages` WHERE `senderid` = 1 AND `receiverid` = 3 OR `senderid` = 3 AND `receiverid` = 1
*/
