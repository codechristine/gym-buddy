import React from 'react';
import Header from './header';
import GymCarousel from './gymcarousel';

export default class GymView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeObject: null
    };
    this.insertGymData = this.insertGymData.bind(this);
    this.photoArray = [];
  }
  componentDidMount() {
    const combinedMapObject = this.props.view.params;

    let request = {
      placeId: combinedMapObject.currentLocation.placeId,
      fields: ['photo', 'name', 'place_id', 'formatted_address', 'opening_hours', 'rating']
    };

    combinedMapObject.googleMap.getDetails(request, (place, status) => {
      if (status !== 'OK') {
        return false;
      } else {
        this.setState({ placeObject: place });
      }
    });
  }
  insertGymData() {
    fetch('/api/user.php', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.state.placeObject) })
      .then(result => result.json())
      .then(result => {
        return result;
      })
      .catch(error => error.message);
  }
  render() {
    const { placeObject } = this.state;
    if (placeObject) {
      for (let i = 0; i < placeObject.photos.length; i++) {
        let photo = (placeObject.photos[i].getUrl());
        this.photoArray.push(photo);
      }
    }
    if (placeObject) {
      // console.log(placeObject);
      // console.log(this.props.currentUser);
      let addGym = this.insertGymData();

      return (
        <div className="main__container">
          <Header name={this.props.view.name} prevName={this.props.view.prevName} setView={this.props.setView} gymName={placeObject.name} isLoggedIn={this.props.isLoggedIn} params={this.props.view.params}/>
          <div className="gym__view-container">
            <div className="gym__view-carousel-container">
              <GymCarousel photoArray = {this.photoArray} />
            </div>
            <div className="gym__view-info-container">
              <div className="gym__view-info-name-and-button-container">
                <h2 className="gym__view-name">{placeObject.name}</h2>
                <button className="btn gym__button" onClick={addGym}>Add Gym</button>
              </div>
              <div className="gym__view-info-address-and-hours-container">
                <h3>Address:</h3>
                <div className="gym__view-address">{placeObject.formatted_address}</div>
                <div className="gym__view-rating-container">
                  <div className="gym__view-hours">
                    <h3>Hours:</h3>
                    {placeObject.opening_hours.weekday_text.map((opening, index) => {
                      return <div key={index} opening={opening}>{opening} </div>;
                    })}
                  </div>
                  <div className="gym__view-rating">
                    <h3>Rating: {placeObject.rating.toFixed(1)}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="gym__view-list">

            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
      );
    }

  }
}
