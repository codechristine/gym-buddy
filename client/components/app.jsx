import React from 'react';
import Header from './header';
import Home from './home';
import GymMap from './gym-map';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      view: {
        name: 'home',
        params: {}
      },
      prevName: ''
    };
    this.setView = this.setView.bind(this);
  }
  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }
  render() {
    const { name } = this.state.view;
    let element;
    switch (name) {
      case 'home':
        element = <Home setView = { this.setView }/>;
        break;
      case 'map':
        element = <GymMap setView = { this.setView } />;
        break;
    }
    return (
      <div className="main">
        <div className="main__container">
          <Header name={ this.state.name }/>
          { element }
        </div>
      </div>
    );
  }
}
