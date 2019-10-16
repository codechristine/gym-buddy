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
          <GoogleMaps id="myMap"
            options={{
              center: { lat: 41.0082, lng: 28.9784 },
              zoom: 8
            }}
            onMapLoad={map => {
              const marker = new window.google.maps.Marker({
                position: { lat: 41.0082, lng: 28.9784 },
                map: map,
                title: 'Hello Istanbul!'
              });
              marker.addListener('click', e => {
                this.createInfoWindow(e, map);
              });
            }}
          />
        </div>
      </div>
    );
  }
}
