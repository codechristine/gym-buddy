import React from 'react';

class MapItem extends React.Component {
  render() {
    const location = this.props.location;
    const placesServiceObject = this.props.placesServiceObj;
    const combinedMap = {
      currentLocation: location,
      googleMap: placesServiceObject
    };

    const setView = () => this.props.setView('gym', 'map', combinedMap);

    return (
      <div className="map__list-item" onClick={setView} ref={this.props.refForContainer}>
        <img src={location.image} alt="Gym Photo" className="map__list-photo"/>
        <h2 className="map__list-name">{ location.name }</h2>
      </div>
    );
  }
}

export default MapItem;
