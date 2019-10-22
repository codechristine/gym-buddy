import React from 'react';
// import ReactDom from 'react-dom';
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
  }
  addResultsToList(searchResults, searchStatus) {
    let placesArray = [];

    if (searchStatus !== 'OK') {
      return false;
    }
    for (let i = 0; i < 10; i++) {
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
      this.state.places.map((element, index) => {
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

        const infoWindow = new window.google.maps.InfoWindow({
          content: element.name,
          position: { lat: element.lat, lng: element.lng }
        });
        marker.addListener('click', e => {
          infoWindow.open(this.map, marker);

          // console.log(index);

          // window.onScroll = {targetElement} => {
          //   const targetElement = document.getElementsByClassName('map__list');
          //   const targetElementTop = targetElement.getBoundingClientRect().top;
          // }

        });
        infoWindow.close();
        return (
          <MapItem key = { element.id } location = { element } setView = { this.props.setView } placesServiceObj = {this.placesServiceObj}/>
        );
      })
    );
  }
}
