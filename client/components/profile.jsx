import React from 'react';
import Header from './header';

class Profile extends React.Component {
  render() {
    const firstName = this.props.currentUser.firstName;
    const lastName = this.props.currentUser.lastName;
    const age = this.props.currentUser.age;
    let gym = this.props.currentUser.gym;
    let photo = this.props.currentUser.photo;

    if (!gym) {
      gym = 'Not a Gym Member';
    }

    if (!photo) {
      photo = 'https://static.thenounproject.com/png/538846-200.png';
    }
    return (
      <div className="main__container">
        <Header name={this.props.view.name} prevName={this.props.view.prevName} setView={this.props.setView} currentUser={this.props.currentUser}/>
        <div className="main__body">
          <div className="profile__container">
            <div className="profile__container-top">
              <img src={photo} alt="profile photo" className="profile__photo"/>
              <div className="profile__info">
                <div className="profile__info-name">{ `${firstName} ${lastName}` }</div>
                <div className="profile__info-age">{age}</div>
                <div className="profile__info-gym">{gym}</div>
              </div>
              <div className="profile__buttons">
                <button className="btn profile__button selected"> Buddies </button>
                <button className="btn profile__button"> Expertise </button>
                <button className="btn profile__button"> Schedule </button>
              </div>
            </div>
            <div className="profile__container-bottom">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
