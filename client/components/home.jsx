import React from 'react';
import Carousel from './carousel';
import LocationSearchInput from './autocomplete';

class Home extends React.Component {
  render() {
    return (
      <div className="main__body">
        <Carousel />
        <div className="main__view">
          View Gyms Around Me
        </div>
        <LocationSearchInput />
      </div>
    );
  }
}

export default Home;
