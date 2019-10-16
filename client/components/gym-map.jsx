import React from 'react';
import Header from './header';
import GoogleMaps from './map';

class GymMap extends React.Component {
  render() {
    const location = this.props.location;
    return (
      <div className="main__container">
        <Header name={this.props.view.name} prevName={this.props.view.prevName} setView={this.props.setView} />
        <div className="main__body">
          <div className="map__view">
            <GoogleMaps id="myMap" className = "map__view-map"
              options={{
                center: { lat: location.lat, lng: location.lng },
                zoom: 15
              }}
              onMapLoad={map => {
                const marker = new window.google.maps.Marker({
                  position: { lat: location.lat, lng: location.lng },
                  map: map,
                  title: 'You are here!'
                });
                marker.addListener('click', e => {
                  this.createInfoWindow(e, map);
                });
              }}
            />
          </div>
          <div className="map__list">
          </div>
        </div>
      </div>
    );
  }
}

export default GymMap;
