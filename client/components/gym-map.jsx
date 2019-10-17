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

    const location = this.props.location;
    return (
      <div className="main__container">
        <Header name={this.props.view.name} prevName={this.props.view.prevName} setView={this.props.setView} />
        <div className="main__body">
          <div className="map__view">
            <GoogleMaps id="myMap" className = "map__view-map" updateMap={this.updateMap}
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
            <Place map={this.state.map} location={location}/>
          </div>
        </div>
      </div>
    );
  }
}

export default GymMap;
