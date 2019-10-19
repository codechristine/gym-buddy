import React from 'react';
// import { resolve } from 'path';
import Header from './header';

export default class GymView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null
    };
  }
  render() {
    const combinedMapObject = this.props.view.params;

    // console.log(combinedMapObject);

    let request = {
      placeId: combinedMapObject.currentLocation.id,
      fields: ['photo', 'name', 'place_id', 'formatted_address', 'opening_hours', 'rating']
    };

    combinedMapObject.googleMap.getDetails(request, function (place, status) {
      if (status !== 'OK') {
        return false;
      }
      // console.log(place);
      return place;
    });

    return (
      <div className="main__container">
        <Header name={this.props.view.name} prevName={this.props.view.prevName} setView={this.props.setView} isLoggedIn={this.props.isLoggedIn} />
        <div className="main__body">
          <div className="gym__view-container">
            <div className="gym__view-photos"> classphotos</div>
            <div className="gym__view-address">gym address</div>
            <div className="gym__view-hours">gym hours</div>
            <div className="gym__view-peak-hours">peak hours</div>
            <button className="gym__view-button">Add Gym</button>
          </div>
        </div>
      </div>
    );
  }
}
