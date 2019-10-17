import React from 'react';

export default class Place extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: []
    };
    this.addResultsToList = this.addResultsToList.bind(this);
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
  render() {
    this.map = this.props.map;

    // if (this.state.places) {
    //   console.log(this.state.places);
    //   let image = this.state.places.image;
    //   let name = this.state.places.name;
    return (
      <div className="place___list">
        <h3 className="place__list-header">Gym View List</h3>
        {this.state.places.map(list => {
          // console.log(list);
          return (
            <div key={list.id}>
              <img className="place__list-image" src={list.image}></img>
              <div className="place__list-name">{list.name}</div>
            </div>
          );
        })}

      </div>
    );
  }
}
