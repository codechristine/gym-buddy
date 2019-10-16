import React from 'react';
import Header from './header';

class GymMap extends React.Component {
  render() {
    return (
      <div className="main__container">
        <Header name={this.props.view.name} prevName={this.props.view.prevName} setView={this.props.setView} />
      </div>
    );
  }
}

export default GymMap;
