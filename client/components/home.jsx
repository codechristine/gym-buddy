import React from 'react';
import Carousel from './carousel';
import LocationSearchInput from './autocomplete';
import Header from './header';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.updateLocation = this.updateLocation.bind(this);
  }
  updateLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      let locationObj = { lat: position.coords.latitude, lng: position.coords.longitude };
      this.props.setLocation(locationObj);
      this.props.setView('map', 'home', {});
    });

  }
  render() {
    const viewMap = () => this.props.setView('map', 'home', {});
    return (
      <div className="main__container">
        <Header name = { this.props.view.name } prevName = { this.props.view.prevName } setView = { this.props.setView } isLoggedIn = { this.props.isLoggedIn } />
        <div className="main__body">
          <Carousel />
          <button className="main__view" onClick={this.updateLocation}>
            View Gyms Around Me
          </button>
          <LocationSearchInput setLocation = { this.props.setLocation } viewMap={ viewMap }/>
        </div>
      </div>
    );
  }
}

export default Home;
