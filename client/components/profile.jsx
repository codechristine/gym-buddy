import React from 'react';
import Header from './header';
import BuddyList from './buddy-list';
import Expertise from './expertise';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'buddies',
      buddiesArr: [],
      params: {}
    };
    this.toggleView = this.toggleView.bind(this);
    this.logOutUser = this.logOutUser.bind(this);
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
  render() {
    const firstName = this.props.currentUser.firstname;
    const lastName = this.props.currentUser.lastname;
    const age = this.props.currentUser.age;
    let gym = this.props.currentUser.gym;
    let photo = this.props.currentUser.photo;
    const toggleBuddy = () => this.toggleView('buddies');
    const toggleExpertise = () => this.toggleView('expertise');

    const { view, buddiesArr } = this.state;
    let element;

    switch (view) {
      case 'buddies':
        if (!buddiesArr.length) {
          element = <div className="buddy__none">
            <img src="https://cdn4.iconfinder.com/data/icons/faces-10/96/sadness-512.png" alt="no friends" className="buddy__card-photo"/>
            No Friends
          </div>;
        } else {
          element =
          <div className="buddy__container">
            {
              buddiesArr.map(element => {
                return <BuddyList key={element.id} buddyInfo={element} />;
              })
            }
          </div>;
        }
        break;
      case 'expertise':
        element = <Expertise currentUser = {this.props.currentUser} />;
        break;
    }

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
              <div className="profile__buttons-top">
                <button className="btn profile__button" onClick={this.logOutUser}> Sign Out </button>
                <button className="btn profile__button"> Edit </button>
              </div>
              <img src={photo} alt="profile photo" className="profile__photo"/>
              <div className="profile__info">
                <div className="profile__info-name">{ `${firstName} ${lastName}` }</div>
                <div className="profile__info-age">{age}</div>
                <div className="profile__info-gym">{gym}</div>
              </div>
              <div className="profile__buttons-bottom">
                <button className="btn profile__button selected" onClick={toggleBuddy}> Buddies </button>
                <button className="btn profile__button" onClick={toggleExpertise}> Expertise </button>
                <button className="btn profile__button"> Schedule </button>
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
