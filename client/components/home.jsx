import React from 'react';
import Carousel from './carousel';

class Home extends React.Component {
  render() {
    return (
      <div className="main__body">
        <Carousel />
        <div className="main__view">
          View Gyms Around Me
        </div>
        <div className="main__search">
          Search Gym
        </div>
      </div>
    );
  }
}

export default Home;
