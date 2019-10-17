import React from 'react';

export default class Place extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: []
    };
    this.addResultsToList = this.addResultsToList.bind(this);
  }
  addResultsToList(searchResults, searchStatus) {
    let placesArray = [];

    if (searchStatus !== 'OK') {
      return false;
    }
    for (let resultIndex = 0; resultIndex < 10; resultIndex++) {
      let placesObject = {
        name: searchResults[resultIndex].name,
        lat: searchResults[resultIndex].geometry.location.lat(),
        lng: searchResults[resultIndex].geometry.location.lng(),
        open: searchResults[resultIndex].opening_hours.open_now,
        rating: searchResults[resultIndex].rating
      };
      placesArray.push(placesObject);
    }
    this.setState({
      places: placesArray
    });
    // console.log(this.state.places);
  }
  render() {
    // console.log(this.state.places);
    if (!this.props.map) {
      return (
        <div>no content</div>
      );
    }
    const placesServiceObj = new window.google.maps.places.PlacesService(this.props.map);
    let locationObjToSearch = new window.google.maps.LatLng(this.props.location.lat, this.props.location.lng);
    let request = {
      location: locationObjToSearch,
      radius: '15000',
      type: ['gym']
    };
    // Create Google Places Service object
    placesServiceObj.nearbySearch(request, this.addResultsToList);
    return (
      <div>{`${this.state.places}`}</div>
    );
  }

}
