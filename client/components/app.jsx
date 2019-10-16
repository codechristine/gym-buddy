import React from 'react';
import Home from './home';
import GymMap from './gym-map';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      view: {
        name: 'home',
        prevName: '',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
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
  render() {
    const { name } = this.state.view;
    let element;
    switch (name) {
      case 'home':
        element = <Home setView = { this.setView } view = { this.state.view }/>;
        break;
      case 'map':
        element = <GymMap setView={this.setView} view={ this.state.view }/>;
        break;
    }
    return (
      <div className="main">
        { element }
      </div>
    );
  }
}
