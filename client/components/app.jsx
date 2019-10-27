import React from 'react';
import Home from './home';
import GymMap from './gym-map';
import SignUp from './sign-up';
import GymView from './gym-view';
import LogIn from './login';
import Profile from './profile';
import GymBuddy from './gym-buddy';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      isLoggedIn: false,
      location: {},
      view: {
        name: 'home',
        prevName: '',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.logInUser = this.logInUser.bind(this);
    this.logOutUser = this.logOutUser.bind(this);
    this.addGym = this.addGym.bind(this);
    this.deleteGym = this.deleteGym.bind(this);
    this.goToGym = this.goToGym.bind(this);
  }
  setView(name, prevName, params) {
    this.setState({
      view: {
        name: name,
        prevName: prevName,
        params: params
      }
    });
  }
  logInUser(userObj) {
    fetch(`/api/user.php?username=${userObj.username}`)
      .then(result => result.json())
      .then(result => {
        if (result.error) {
          this.setState({
            view: {
              name: 'login',
              prevName: 'home',
              params: result
            }
          });
        } else {
          this.setState({
            currentUser: result[0],
            isLoggedIn: true,
            view: {
              name: 'profile',
              prevName: 'home',
              params: {}
            }
          });
        }
      });
  }
  addGym(gymObj) {
    fetch('/api/user.php', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(gymObj) })
      .then(result => result.json())
      .then(result => {
        this.setState({
          currentUser: result[0],
          view: {
            name: 'profile',
            prevName: 'map',
            params: {}
          }
        });
      })
      .catch(error => error.message);
  }
  deleteGym(gymObj) {
    fetch('/api/user.php', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(gymObj) })
      .then(result => result.json())
      .then(result => {
        this.setState({
          currentUser: result[0],
          view: {
            name: 'profile',
            prevName: 'map'
          }
        });
      });
  }
  goToGym(gymId) {
    fetch(`/api/gyms.php?placeId=${gymId}`)
      .then(result => result.json())
      .then(result => {
        this.setState({
          location: {
            placeId: result[0].placeid,
            lat: parseFloat(result[0].lat),
            lng: parseFloat(result[0].lng)
          },
          view: {
            name: 'map',
            prevName: 'home',
            params: {}
          }
        });
      });
  }
  logOutUser() {
    this.setState({ isLoggedIn: false });
  }
  setLocation(locationObj) {
    this.setState({ location: locationObj });
  }
  render() {
    const { name } = this.state.view;
    let element;
    switch (name) {
      case 'home':
        element = <Home setView={this.setView} view={this.state.view} setLocation={this.setLocation} isLoggedIn={this.state.isLoggedIn}/>;
        break;
      case 'map':
        element = <GymMap setView={this.setView} view={ this.state.view } location={ this.state.location } isLoggedIn={this.state.isLoggedIn}/>;
        break;
      case 'gym':
        element = <GymView setView={this.setView} view={this.state.view} isLoggedIn={this.state.isLoggedIn} currentUser={this.state.currentUser} addGym={this.addGym} deleteGym={this.deleteGym}/>;
        break;
      case 'signup':
        element = <SignUp setView={this.setView} view={this.state.view} params={this.state.view.params}/>;
        break;
      case 'login':
        element = <LogIn setView={this.setView} view={this.state.view} logInUser={this.logInUser}/>;
        break;
      case 'profile':
        element = <Profile setView={this.setView} view={this.state.view} currentUser={this.state.currentUser} logOutUser={this.logOutUser} goToGym={this.goToGym}/>;
        break;
      case 'buddy':
        element = <GymBuddy setView={this.setView} view={this.state.view} currentUser={this.state.currentUser} goToGym={this.goToGym} />;
    }
    return (
      <div className="main">
        { element }
      </div>
    );
  }
}
