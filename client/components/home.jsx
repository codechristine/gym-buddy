import React from 'react';
import Carousel from './carousel';
import LocationSearchInput from './autocomplete';
import Header from './header';

class Home extends React.Component {
  render() {
    const viewMap = () => this.props.setView('map', 'home', {});
    return (
      <div className="main__container">
        <Header name = { this.props.view.name } prevName = { this.props.view.prevName } setView = { this.props.setView }/>
        <div className="main__body">
          <Carousel />
          <div className="main__view" onClick={viewMap}>
            View Gyms Around Me
          </div>
          <LocationSearchInput />
        </div>
      </div>
    );
  }
}

export default Home;
