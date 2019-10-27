import React from 'react';
import Header from './header';
import BuddyList from './buddy-list';
import Expertise from './expertise';
import Schedule from './schedule';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'buddies',
      buddiesArr: [],
      schedule: {},
      params: {}
    };
    this.toggleView = this.toggleView.bind(this);
    this.logOutUser = this.logOutUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }
  componentDidMount() {
    this.id = this.props.currentUser.id;
    this.getBuddies();
  }
  getBuddies() {
    fetch(`/api/friends.php?id=${this.id}`)
      .then(result => result.json())
      .then(result => {
        this.setState({ buddiesArr: result });
      });
  }
  toggleView(view) {
    this.setState({ view: view });
  }
  logOutUser() {
    this.props.setView('home', '', {});
    this.props.logOutUser();
  }
  editUser() {
    const user = this.props.currentUser;
    const userInfo = {
      userName: user.username,
      firstName: user.firstname,
      lastName: user.lastname,
      age: user.age,
      weightLifting: user.weightlifting,
      cardio: user.cardio,
      yoga: user.yoga,
      bodyBuilding: user.bodybuilding,
      swimming: user.swimming,
      id: user.id
    };
    this.props.setView('signup', 'profile', userInfo);
  }
  render() {
    const firstName = this.props.currentUser.firstname;
    const lastName = this.props.currentUser.lastname;
    const age = this.props.currentUser.age;
    let gym = this.props.currentUser.gymname;
    let photo = this.props.currentUser.photo;
    let gymid = this.props.currentUser.gymid;
    let buddiesClass = 'btn profile__button';
    let expertiseClass = 'btn profile__button';
    let scheduleClass = 'btn profile__button';
    const toggleBuddy = () => this.toggleView('buddies');
    const toggleExpertise = () => this.toggleView('expertise');
    const toggleSchedule = () => this.toggleView('schedule');
    const { view, buddiesArr } = this.state;
    let element, goToGymMethod;
    switch (view) {
      case 'buddies':
        buddiesClass = 'btn profile__button selected';
        if (!buddiesArr.length) {
          element = <div className="buddy__none">
            <img src="https://cdn4.iconfinder.com/data/icons/faces-10/96/sadness-512.png" alt="no friends" className="buddy__card-photo"/>
            No Gym Buddies Yet
          </div>;
        } else {
          element =
              buddiesArr.map(element => {
                element.friends = [element.sender];
                const setViewMethod = () => this.props.setView('buddy', 'profile', { element });
                return <BuddyList key={element.id} buddyInfo={element} setViewMethod={setViewMethod}/>;
              });
        }
        break;
      case 'expertise':
        expertiseClass = 'btn profile__button selected';
        element = <Expertise currentUser = {this.props.currentUser} />;
        break;
      case 'schedule':
        scheduleClass = 'btn profile__button selected';
        element = <Schedule user = {this.props.currentUser} />;
        break;
    }

    if (!gym) {
      gym = 'Not a Gym Member';
    } else {
      goToGymMethod = () => this.props.goToGym(gymid);
    }

    if (!photo) {
      photo = 'https://static.thenounproject.com/png/538846-200.png';
    }
    return (
      <div className="main__container">
        <Header name={this.props.view.name} prevName={this.props.view.prevName} setView={this.props.setView} currentUser={this.props.currentUser} placeObject={this.props.view.params}/>
        <div className="main__body">
          <div className="profile__container">
            <div className="profile__container-top">
              <div className="profile__buttons-top">
                <button className="btn profile__button" onClick={this.logOutUser}> Sign Out </button>
                <button className="btn profile__button" onClick={this.editUser}> Edit </button>
              </div>
              <img src={photo} alt="profile photo" className="profile__photo"/>
              <div className="profile__info">
                <div className="profile__info-name">{ `${firstName} ${lastName}` }</div>
                <div className="profile__info-age">{age}</div>
                <div className="profile__info-gym" onClick={goToGymMethod}>{gym}</div>
              </div>
              <div className="profile__buttons-bottom">
                <button className={buddiesClass} onClick={toggleBuddy}> Buddies </button>
                <button className={expertiseClass} onClick={toggleExpertise}> Expertise </button>
                <button className={scheduleClass} onClick={toggleSchedule}> Schedule </button>
              </div>
            </div>
            <div className="profile__container-bottom">
              { element }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
