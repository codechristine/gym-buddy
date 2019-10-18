import React from 'react';
import Header from './header';

class Profile extends React.Component {
  render() {
    const currentUser = this.props.currentUser;

    return (
      <div className="main__container">
        <Header name={this.props.view.name} prevName={this.props.view.prevName} setView={this.props.setView} currentUser={this.props.currentUser}/>
        <div className="main__body">
          <h1> { currentUser } </h1>
        </div>
      </div>
    );
  }
}

export default Profile;
