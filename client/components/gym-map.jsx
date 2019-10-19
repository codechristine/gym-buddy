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
  // createInfoWindow(e, mapObject) {
  //   const infoWindow = new window.google.maps.InfoWindow({
  //     content: '<div id="infoWindow" />',
  //     position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
  //     // position: { lat: location.lat, lng: location.lng }
  //   });
  // }
  render() {
    let element;
    const location = this.props.location;
    if (!this.state.map) {
      element = <div>Loading...</div>;
    } else {
      element = <MapList map={this.state.map} location={location} setView={this.props.setView}/>;
    }

    return (
      <div className="main__container">
        <Header name={this.props.view.name} prevName={this.props.view.prevName} setView={this.props.setView} isLoggedIn={this.props.isLoggedIn}/>
        <div className="main__body">
          <div className="map__view">
            <GoogleMaps id="myMap" className = "map__view-map"
              options={{
                center: { lat: location.lat, lng: location.lng },
                zoom: 12.5,
                styles: [
                  { elementType: 'geometry', stylers: [{ color: '#e4e4e4' }] },
                  { elementType: 'labels.text.stroke', stylers: [{ color: '#ffffff' }] },
                  { elementType: 'labels.text.fill', stylers: [{ color: '#f99f97' }] },
                  {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#000000' }]
                  },
                  {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#000000' }]
                  },
                  {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{ color: '#263c3f' }]
                  },
                  {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#000000' }]
                  },
                  {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{ color: '#38414e' }]
                  },
                  {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#212a37' }]
                  },
                  {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#000000' }]
                  },
                  {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{ color: '#746855' }]
                  },
                  {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#1f2835' }]
                  },
                  {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#000000' }]
                  },
                  {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{ color: '#2f3948' }]
                  },
                  {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#000000' }]
                  },
                  {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{ color: '#17263c' }]
                  },
                  {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#000000' }]
                  },
                  {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{ color: '#17263c' }]
                  }
                ]
              }}
              onMapLoad={mapObject => {
                const marker = new window.google.maps.Marker({
                  position: { lat: location.lat, lng: location.lng },
                  map: mapObject,
                  title: 'You are here!'
                });
                this.setState({ map: mapObject });
                marker.addListener('click', e => {
                  // this.createInfoWindow(e, mapObject);

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
