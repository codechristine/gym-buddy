import React from 'react';

class MapItem extends React.Component {
  render() {
    const location = this.props.location;
    const setView = () => this.props.setView('gym', 'map', this.props.location);

    return (
      <div className="map__list-item" onClick={setView}>
        <img src={location.image} alt="Gym Photo" className="map__list-photo"/>
        <h2 className="map__list-name">{ location.name }</h2>
      </div>
    );
  }
}

export default MapItem;
