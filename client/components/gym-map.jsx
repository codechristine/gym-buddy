import React from 'react';
import Header from './header';

class GymMap extends React.Component {
  render() {
    return (
      <div className="main__container">
        <Header name={this.props.view.name} prevName={this.props.view.prevName} setView={this.props.setView} />
        <div className="main__body">
          <div className="map__view">
          </div>
          <div className="map__list">
          </div>
        </div>
      </div>
    );
  }
}

export default GymMap;
