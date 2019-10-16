import React from 'react';
import Home from './home';
import GymMap from './gym-map';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      location: {},
      view: {
        name: 'home',
        prevName: '',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
    this.setLocation = this.setLocation.bind(this);
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
        element = <GymMap setView={this.setView} view={ this.state.view } location={ this.state.location }/>;
        break;
    }
    return (
      <div className="main">
        { element }
      </div>
    );
  }
}
