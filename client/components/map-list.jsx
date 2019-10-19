import React from 'react';
import MapItem from './map-item';

export default class MapList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: []
    };
    this.addResultsToList = this.addResultsToList.bind(this);
    this.map = null;
    this.placesServiceObj = null;
  }
  componentDidMount() {
    this.placesServiceObj = new window.google.maps.places.PlacesService(this.map);
    let locationObjToSearch = new window.google.maps.LatLng(this.props.location.lat, this.props.location.lng);
    let request = {
      location: locationObjToSearch,
      radius: '15000',
      type: ['gym']
    };
    this.placesServiceObj.nearbySearch(request, this.addResultsToList);

    let searchResultData = {};
    let moreDetails = {
      placeId: '8a9733830bd509d8a0afac83495891a3e3f0768c',
      fields: ['name', 'place_id', 'formatted_address', 'geometry',
        'url', 'types', 'photos', 'rating', 'user_ratings_total', 'price_level']
    };
    // console.log(this.placesServiceObj);
    this.placesServiceObj.getDetails(moreDetails, function (place, status) {
      // console.log(place);
      if (status !== 'OK') {
        return false;
      }
      for (let field of moreDetails.fields) {
        searchResultData[field] = place[field];
      }
      // trip.places.renderPlaceResultBox(searchResultData);
    });
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
  render() {

    this.map = this.props.map;
    this.markers = [];
    let image = 'https://img.icons8.com/ultraviolet/50/000000/flex-biceps.png';

    return (
      this.state.places.map(element => {
        let marker = new window.google.maps.Marker({
          position: { lat: element.lat, lng: element.lng },
          icon: {
            url: image,
            scaledSize: new window.google.maps.Size(50, 50)
          }
        });
        marker.setMap(this.map);
        this.markers.push(marker);
        this.map.setZoom(12);
        return (
          <MapItem key = { element.id } location = { element } setView = { this.props.setView } placesServiceObj = {this.placesServiceObj}/>
        );
      })
    );
  }
}
