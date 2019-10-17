import React from 'react';

export default class Place extends React.Component {
  addResultsToList(searchResults, searchStatus) {
    if (searchStatus !== 'OK') {
      return false;
    }
    for (let resultIndex = 0; resultIndex < 10; resultIndex++) {
      // console.log(searchResults[resultIndex]);
    }
  }
  render() {
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
      <div>hi</div>
    );
  }

}
