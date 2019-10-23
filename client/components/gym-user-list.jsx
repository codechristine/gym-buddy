import React from 'react';

class GymUserListItem extends React.Component {
  render() {
    const userInfo = this.props.userInfo;
    let photo = userInfo.photo;

    if (!photo) {
      photo = 'https://static.thenounproject.com/png/538846-200.png';
    }
    return (
      <div className="gymuser__card" onClick={this.props.setViewMethod}>
        <div className="gymuser__card-picture">
          <img src={photo} alt={userInfo.firstname} className="gymuser__card-photo" />
        </div>
        <div className="gymuser__card-name">
          {userInfo.username}
        </div>
      </div>
    );
  }
}

export default GymUserListItem;
