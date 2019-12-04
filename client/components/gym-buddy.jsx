import React from 'react';
import Header from './header';
import Schedule from './schedule';

class GymBuddy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFriends: false,
      status: null
    };
    this.addBuddy = this.addBuddy.bind(this);
    this.removeBuddy = this.removeBuddy.bind(this);
  }
  componentDidMount() {
    if (this.props.view.params.element.friends.includes(this.props.currentUser.id)) {
      this.setState({
        isFriends: true
      });
    }

    if (this.props.view.prevName === 'conversation') {
      this.setState({
        isFriends: true
      });
    }
  }
  addBuddy() {
    const friendObj = {
      currentUser: this.props.currentUser.id,
      receiver: this.props.view.params.element.id
    };
    fetch('/api/friends.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(friendObj) })
      .then(result => result.json())
      .then(result => {
        if (result.success) {
          this.setState({
            isFriends: true,
            status: result.status
          });
        }
      });
  }
  removeBuddy() {
    const friendObj = {
      currentUser: this.props.currentUser.id,
      receiver: this.props.view.params.element.id
    };

    fetch('/api/friends.php', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(friendObj) })
      .then(result => result.json())
      .then(result => {
        if (result.success) {
          this.setState({
            isFriends: false,
            status: result.status
          });
        }
      });
  }
  render() {
    const { isFriends, status } = this.state;
    const user = this.props.view.params.element;
    user.placeObject = this.props.view.params.placeObject;
    const viewMessages = () => this.props.setView('conversation', 'buddy', user);
    let photo = user.photo;
    let gym = user.gymname;
    const gymId = user.gymid;
    let button, statusMessage, goToGymMethod, messageButton, gymClass;
    if (!photo) {
      photo = 'https://static.thenounproject.com/png/538846-200.png';
    }

    if (!gym) {
      gym = 'Not a Gym Member';
      gymClass = 'noGym';
    } else {
      goToGymMethod = () => this.props.goToGym(gymId);
    }

    if (isFriends) {
      button = <button className="btn buddy__button remove" onClick={this.removeBuddy}><i className="fas fa-user-minus"></i></button>;
      messageButton = <button className="btn buddy__button add" onClick={viewMessages}><i className="fas fa-comments"></i></button>;
    } else {
      button = <button className="btn buddy__button add" onClick={this.addBuddy}><i className="fas fa-user-plus"></i></button>;
    }

    if (status) {
      statusMessage = status;
    }

    return (
      <div className="main__container">
        <Header name={this.props.view.name} prevName={this.props.view.prevName} setView={this.props.setView} buddyUser={user} placeObject={this.props.view.params.placeObject}/>
        <div className="main__body">
          <div className="buddy__container">
            <div className="buddy__container-top">
              <div className="buddy__container-photo">
                <div className="buddy__photo">
                  <img src={photo} alt={`${user.firstname}'s photo`} className="buddy__picture" />
                </div>
                <div className="buddy__info">
                  <div className="buddy__info-buttons">
                    { button }
                    { messageButton }
                  </div>
                  <div className="buddy__info-name">
                    <div className="buddy__name">{`${user.firstname} ${user.lastname}`}</div>
                    <div className={`buddy__gym ${gymClass}`} onClick={goToGymMethod}>{gym}</div>
                  </div>
                </div>
              </div>
              <div className="buddy__container-stats">
                <div className={`buddy__stats-message buddy__message`}>
                  { statusMessage }
                </div>
                <div className="buddy__stats-header">
                  STATS
                </div>
                <div className="buddy__stats-card">
                  <div className="buddy__stats-category">WeightLifting:</div>
                  <div className="buddy__stats-value">{user.weightlifting}</div>
                </div>
                <div className="buddy__stats-card">
                  <div className="buddy__stats-category">Cardio:</div>
                  <div className="buddy__stats-value">{user.cardio}</div>
                </div>
                <div className="buddy__stats-card">
                  <div className="buddy__stats-category">Yoga:</div>
                  <div className="buddy__stats-value">{user.yoga}</div>
                </div>
                <div className="buddy__stats-card">
                  <div className="buddy__stats-category">Body Building:</div>
                  <div className="buddy__stats-value">{user.bodybuilding}</div>
                </div>
                <div className="buddy__stats-card">
                  <div className="buddy__stats-category">Swimming:</div>
                  <div className="buddy__stats-value">{user.swimming}</div>
                </div>
              </div>
            </div>
            <div className="buddy__container-bottom">
              <Schedule user={user} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GymBuddy;
