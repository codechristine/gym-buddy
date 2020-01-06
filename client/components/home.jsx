import React from 'react';
import Carousel from './carousel';
import LocationSearchInput from './autocomplete';
import Header from './header';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
    this.updateLoading = this.updateLoading.bind(this);
  }
  updateLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      let locationObj = { lat: position.coords.latitude, lng: position.coords.longitude };
      this.props.setLocation(locationObj);
      this.props.setView('map', 'home', {});
    });
  }
  updateLoading() {
    this.setState({ isLoading: true });
    this.updateLocation();
  }
  render() {
    const viewMap = () => this.props.setView('map', 'home', {});
    const searchOptions = { componentRestrictions: { country: 'us' } };
    const { isLoading } = this.state;
    let element;

    if (!isLoading) {
      element = <button className="main__view" onClick={this.updateLoading}> View Gyms Around Me </button>;
    } else {
      element = <div className="lds-ring"><div></div><div></div><div></div><div></div></div>;
    }

    return (
      <div className="main__container">
        <Header name = { this.props.view.name } prevName = { this.props.view.prevName } setView = { this.props.setView } isLoggedIn = { this.props.isLoggedIn } />
        <div className="main__body">
          <Carousel />
          { element }
          <LocationSearchInput setLocation = { this.props.setLocation } viewMap={ viewMap } searchOptions={ searchOptions }/>
        </div>
      </div>
    );
  }
}

export default Home;
