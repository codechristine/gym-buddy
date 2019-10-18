import React from 'react';

class MapItem extends React.Component {
  render() {
    const location = this.props.location;

    return (
      <div className="map__list-item">
        <img src={location.image} alt="Gym Photo" className="map__list-photo"/>
        <h2 className="map__list-name">{ location.name }</h2>
      </div>
    );
  }
}

export default MapItem;
