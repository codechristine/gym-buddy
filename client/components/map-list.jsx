import React from 'react';
import MapItem from './map-item';

export default class MapList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: []
    };
    this.addResultsToList = this.addResultsToList.bind(this);
    // this.addMarkers = this.addMarkers.bind(this);
    this.map = null;
  }
  componentDidMount() {
    const placesServiceObj = new window.google.maps.places.PlacesService(this.map);
    let locationObjToSearch = new window.google.maps.LatLng(this.props.location.lat, this.props.location.lng);
    let request = {
      location: locationObjToSearch,
      radius: '15000',
      type: ['gym']
    };
    placesServiceObj.nearbySearch(request, this.addResultsToList);
  }
  addResultsToList(searchResults, searchStatus) {
    let placesArray = [];

    if (searchStatus !== 'OK') {
      return false;
    }
    for (let i = 0; i < 10; i++) {
      let placesObject = {
        id: searchResults[i].id,
        name: searchResults[i].name,
        lat: searchResults[i].geometry.location.lat(),
        lng: searchResults[i].geometry.location.lng(),
        open: searchResults[i].opening_hours.open_now,
        rating: searchResults[i].rating,
        image: searchResults[i].photos[0].getUrl()
      };
      placesArray.push(placesObject);
    }
    this.setState({
      places: placesArray
    });
  }
  // addMarkers(lat, lng, iconURL, map) {

  //   var markerCenter = new window.google.maps.LatLng(lat, lng);
  //   var marker = new window.google.maps.Marker({
  //     position: markerCenter,
  //     icon: {
  //       url: iconURL,
  //       scaledSize: new window.google.maps.Size(70, 70)
  //     }
  //   });
  //   // marker.addListener('click', () => {
  //   //   scrollResult(this.map);
  //   // });
  //   marker.setMap(this.map);
  //   this.markers.push(marker);
  //   return marker;
  // }
  // changeMapCenter(marker) {
  //   var latLng = marker.getPosition();
  //   this.map.setCenter(latLng);
  // }

  render() {
    this.map = this.props.map;
    this.markers = [];

    return (
      this.state.places.map(element => {
        let marker = new window.google.maps.Marker({
          position: { lat: element.lat, lng: element.lng },
          icon: {
          // url: iconURL,
            scaledSize: new window.google.maps.Size(70, 70)
          }
        });
        marker.setMap(this.map);
        this.markers.push(marker);
        return (
          <MapItem key = { element.id } location = { element }/>
        );
      })
    );
  }
}
/*
<div className="container">
        <h3 className="place__list-header">Gyms Nearby</h3>
        <div className="place__list-container">
          {this.state.places.map(list => {
            console.log(list.lat);
            console.log(list.lng);
            let marker = new window.google.maps.Marker({
              position: { lat: list.lat, lng: list.lng }
              icon: {
                // url: iconURL,
                scaledSize: new window.google.maps.Size(70, 70)
              }
            });
            marker.setMap(this.map);
            this.markers.push(marker);

            return (
              <div className="places__list-details" onClick={() => { this.props.setView('gym', { id: list.id }); }} key={list.id} >
                <GymView gym={list} />
                <div className="places__list-details">
                <img className="place__list-image" src={list.image}></img>
                <div className="place__list-name">{list.name}</div>
              </div>
              // </div>
            );
          })}
        </div>
      </div>

*/
