import React from 'react';

class GymUserListItem extends React.Component {
  render() {
    const userInfo = this.props.userInfo;

    return (
      <h1> {userInfo.firstname} </h1>
    );
  }
}

export default GymUserListItem;
