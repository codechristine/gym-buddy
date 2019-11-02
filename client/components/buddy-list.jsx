import React from 'react';

class BuddyList extends React.Component {
  render() {
    const buddyInfo = this.props.buddyInfo;
    let photo = buddyInfo.photo;

    if (!photo) {
      photo = 'https://static.thenounproject.com/png/538846-200.png';
    }

    return (
      <div className="buddy__card" onClick={this.props.setViewMethod}>
        <div className="buddy__card-picture">
          <img src={photo} alt={buddyInfo.firstname} className="buddy__card-photo"/>
        </div>
        <div className="buddy__card-name">
          {buddyInfo.username}
        </div>
      </div>
    );
  }
}

export default BuddyList;
