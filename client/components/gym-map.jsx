import React from 'react';
import Header from './header';
import GoogleMaps from './map';
import Place from './place';

class GymMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null
    };
    this.updateMap = this.updateMap.bind(this);
  }
  updateMap(mapObject) {
    this.setState({ map: mapObject });
  }
  render() {
    let element;
    const location = this.props.location;
    if (!this.state.map) {
      element = <div>Loading</div>;
    } else {
      element = <Place map={this.state.map} location={location} />;
    }

    return (
      <div className="main__container">
        <Header name={this.props.view.name} prevName={this.props.view.prevName} setView={this.props.setView} isLoggedIn={this.props.isLoggedIn}/>
        <div className="main__body">
          <div className="map__view">
            <GoogleMaps id="myMap" className = "map__view-map"
              options={{
                center: { lat: location.lat, lng: location.lng },
                zoom: 15
              }}
              onMapLoad={mapObject => {
                const marker = new window.google.maps.Marker({
                  position: { lat: location.lat, lng: location.lng },
                  map: mapObject,
                  title: 'You are here!'
                });
                this.setState({ map: mapObject });
                marker.addListener('click', e => {
                  this.createInfoWindow(e, mapObject);
                });
              }}
            />
          </div>
          <div className="map__list">
            { element }
          </div>
        </div>
      </div>
    );
  }
}

export default GymMap;
