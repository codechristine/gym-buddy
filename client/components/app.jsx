import React from 'react';
import Home from './home';
import GymMap from './gym-map';
import SignUp from './sign-up';
import LogIn from './login';

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
    fetch('/api/user.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(userObj) })
      .then(result => {
        this.setState({
          view: {
            name: 'login',
            prevName: 'home',
            params: {}
          }
        });
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
        element = <Home setView={this.setView} view={this.state.view} setLocation={this.setLocation}/>;
        break;
      case 'map':
        element = <GymMap setView={this.setView} view={ this.state.view } location={ this.state.location } isLoggedIn={this.state.isLoggedIn}/>;
        break;
      case 'signup':
        element = <SignUp setView={this.setView} view={this.state.view} createUser={this.createUser}/>;
        break;
      case 'login':
        element = <LogIn setView={this.setView} view={this.state.view}/>;
        break;
    }
    return (
      <div className="main">
        { element }
      </div>
    );
  }
}
