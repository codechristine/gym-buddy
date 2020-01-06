import React from 'react';
import Header from './header';
import GoogleMaps from './map';
import MapList from './map-list';

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
      element = <div className="lds-ring"><div></div><div></div><div></div><div></div></div>;
    } else {
      const center = this.state.map.getCenter();
      element = <MapList map={this.state.map} location={location} setView={this.props.setView} center={center}/>;
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
                  icon: {
                    url: 'images/icon-marker.png'
                  }
                });
                this.setState({ map: mapObject });
                marker.addListener(marker, 'click', e => {
                  this.map.close();
                });
              }}
            />
          </div>
          { element }
        </div>
      </div>
    );
  }
}

export default GymMap;
