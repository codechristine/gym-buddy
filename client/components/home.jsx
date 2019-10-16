import React from 'react';
import Carousel from './carousel';
import LocationSearchInput from './autocomplete';

class Home extends React.Component {
  render() {
    const viewMap = () => this.props.setView('map', {});
    return (
      <div className="main__body">
        <Carousel />
        <div className="main__view" onClick={ viewMap }>
          View Gyms Around Me
        </div>
        <LocationSearchInput />
      </div>
    );
  }
}

export default Home;
