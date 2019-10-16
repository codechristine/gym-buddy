import React from 'react';
import Header from './header';
import Home from './home';
import GoogleMaps from './map';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      name: 'home'
    };
  }
  render() {
    return (
      <div className="main">
        <div className="main__container">
          <Header />
          <Home />
          <GoogleMaps />
        </div>
      </div>
    );
  }
}
