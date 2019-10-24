import React from 'react';

class MapItem extends React.Component {
  render() {
    const location = this.props.location;
    const placesServiceObject = this.props.placesServiceObj;
    const combinedMap = {
      currentLocation: location,
      googleMap: placesServiceObject
    };
    let distance = this.props.distance ? <div className="map__list-distance">{`${this.props.distance} miles`}</div> : '';
    let name = this.props.location.name;

    if (name.length > 18) {
      name = `${name.substring(0, 18)}...`;
    }

    if (this.props.distance === '0.00') {
      distance = '';
    }

    const setView = () => this.props.setView('gym', 'map', combinedMap);

    return (
      <div className="map__list-item" onClick={setView} ref={this.props.refForContainer}>
        <div className="map__list-photo">
          <img src={location.image} alt="Gym Photo" className="map__list-picture" />
        </div>
        <div className="map__list-info">
          <div className="map__list-name">{ name }</div>
          { distance }
        </div>
      </div>
    );
  }
}

export default MapItem;
