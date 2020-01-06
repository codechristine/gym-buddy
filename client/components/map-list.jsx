import React from 'react';
import MapItem from './map-item';

export default class MapList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: []
    };
    this.addResultsToList = this.addResultsToList.bind(this);
    this.insertMapData = this.insertMapData.bind(this);
    this.closeAllInfoWindows = this.closeAllInfoWindows.bind(this);
    this.map = null;
    this.placesServiceObj = null;
    this.infoWindows = [];
  }
  componentDidMount() {
    this.placesServiceObj = new window.google.maps.places.PlacesService(this.map);
    let locationObjToSearch = new window.google.maps.LatLng(this.props.location.lat, this.props.location.lng);
    let request = {
      location: locationObjToSearch,
      rankBy: window.google.maps.places.RankBy.DISTANCE,
      type: ['gym']
    };
    this.placesServiceObj.nearbySearch(request, this.addResultsToList);
  }
  closeAllInfoWindows() {
    for (let i = 0; i < this.infoWindows.length; i++) {
      this.infoWindows[i].close();
    }
  }
  insertMapData(placeObject) {
    fetch('/api/gyms.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(placeObject) })
      .then(result => result.json())
      .then(result => {
        return result;
      })
      .catch(error => error.message);
  }
  addResultsToList(searchResults, searchStatus) {
    let placesArray = [];

    if (searchStatus !== 'OK') {
      return false;
    }
    for (let i = 0; i < 15; i++) {
      if (searchResults[i].photos) {
        let placesObject = {
          id: searchResults[i].id,
          placeId: searchResults[i].place_id,
          name: searchResults[i].name,
          lat: searchResults[i].geometry.location.lat(),
          lng: searchResults[i].geometry.location.lng(),
          rating: searchResults[i].rating,
          image: typeof searchResults[i].photos !== 'undefined'
            ? searchResults[i].photos[0].getUrl()
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/No_image_available_600_x_450.svg/1200px-No_image_available_600_x_450.svg.png'
        };
        this.insertMapData(placesObject);
        placesArray.push(placesObject);
      }
    }
    this.setState({
      places: placesArray
    });
  }
  render() {

    this.map = this.props.map;
    this.markers = [];
    let mapListRef = React.createRef();

    return (
      <div className="map__list" ref={mapListRef}>{
        this.state.places.map((element, index, ogArray) => {
          let mapListItemRef = React.createRef();
          let marker = new window.google.maps.Marker({
            position: { lat: element.lat, lng: element.lng },
            icon: {
              url: 'images/muscle-icon.png',
              scaledSize: new window.google.maps.Size(50, 50)
            }
          });
          marker.setMap(this.map);
          this.markers.push(marker);
          this.map.setZoom(14);
          const markerLatLng = marker.getPosition();
          const distance = window.google.maps.geometry.spherical.computeDistanceBetween(this.props.center, markerLatLng);
          const distanceInMiles = (distance / 1609.344).toFixed(2);
          const infoWindow = new window.google.maps.InfoWindow({
            content: `${element.name}, Distance: ${distanceInMiles} miles`,
            position: { lat: element.lat, lng: element.lng }
          });
          this.infoWindows.push(infoWindow);
          marker.addListener('click', e => {
            this.closeAllInfoWindows();
            infoWindow.open(this.map, marker);
            mapListRef.current.scrollTop = mapListItemRef.current.offsetTop - mapListRef.current.offsetTop;
          });
          return (
            <MapItem refForContainer={mapListItemRef} key = { element.id } location = { element } setView = { this.props.setView } placesServiceObj = {this.placesServiceObj} distance={distanceInMiles}/>
          );
        })
      }</div>
    );
  }
}
