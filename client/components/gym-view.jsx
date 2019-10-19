import React from 'react';
import Header from './header';

export default class GymView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeObject: null
    };
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
  render() {
    // console.log(this.state.placeObject);
    const { placeObject } = this.state;

    if (placeObject) {
      return (
        <div className="main__container">
          <Header name={this.props.view.name} prevName={this.props.view.prevName} setView={this.props.setView} isLoggedIn={this.props.isLoggedIn} />
          <div className="main__body">
            <div className="gym__view-container">
              <img className="gym__view-photos" src={placeObject.photos} />
              <div className="gym__view-address">{placeObject.formatted_address}</div>
              <div className="gym__view-hours">{placeObject.opening_hours.weekday_text}</div>
              <div className="gym__view-peak-hours">peak hours</div>
              <button className="gym__view-button">Add Gym</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>no data...</div>
      );
    }

  }
}
