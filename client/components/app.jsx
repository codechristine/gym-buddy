import React from 'react';
import Home from './home';
import GymMap from './gym-map';
import SignUp from './sign-up';
import GymView from './gym-view';
import LogIn from './login';
import Profile from './profile';

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
    this.createUser = this.createUser.bind(this);
    this.logInUser = this.logInUser.bind(this);
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
  createUser(userObj) {
    // fetch('/api/user.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(userObj) })
    //   .then(result => {
    //     this.setState({
    //       view: {
    //         name: 'login',
    //         prevName: 'home',
    //         params: {}
    //       }
    //     });
    //   });
    this.setState({
      currentUser: userObj,
      view: {
        name: 'profile',
        prevName: 'home',
        paras: {}
      }
    });
  }
  logInUser(userObj) {
    fetch(`/api/user.php?username=${userObj.username}`)
      .then(result => result.json())
      .then(result => {
        if (result.error) {
          result.json();
        } else {
          this.setState({
            currentUser: result[0],
            isLoggedIn: true,
            view: {
              name: 'profile',
              prevName: 'home',
              paras: {}
            }
          });
        }
      });
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
        element = <GymView setView={this.setView} view={this.state.view} />;
        break;
      case 'signup':
        element = <SignUp setView={this.setView} view={this.state.view} createUser={this.createUser} />;
        break;
      case 'login':
        element = <LogIn setView={this.setView} view={this.state.view} logInUser={this.logInUser}/>;
        break;
      case 'profile':
        element = <Profile setView={this.setView} view={this.state.view} currentUser={this.state.currentUser}/>;
        break;
    }
    return (
      <div className="main">
        { element }
      </div>
    );
  }
}
