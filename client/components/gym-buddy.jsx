import React from 'react';
import Header from './header';

class GymBuddy extends React.Component {
  render() {
    const user = this.props.view.params.element;
    let photo = user.photo;
    let gym = user.gymname;
    if (!photo) {
      photo = 'https://static.thenounproject.com/png/538846-200.png';
    }

    if (!gym) {
      gym = 'Not a Gym Member';
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
                    <button className="btn buddy__button">Add</button>
                  </div>
                  <div className="buddy__info-name">
                    <div className="buddy__name">{`${user.firstname} ${user.lastname}`}</div>
                    <div className="buddy__gym">{gym}</div>
                  </div>
                </div>
              </div>
              <div className="buddy__container-stats">
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
            <div className="buddy__container-bottom"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default GymBuddy;
