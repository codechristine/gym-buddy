import React from 'react';
import Header from './header';
import GymCarousel from './gymcarousel';
import GymUserListItem from './gym-user-list';

export default class GymView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeObject: null,
      gymListArr: []
    };
    this.insertGymData = this.insertGymData.bind(this);
    this.removeGymData = this.removeGymData.bind(this);
    this.photoArray = [];
  }
  componentDidMount() {
    const combinedMapObject = this.props.view.params;
    let request = {
      placeId: combinedMapObject.currentLocation.placeId,
      fields: ['photo', 'name', 'place_id', 'formatted_address', 'formatted_phone_number', 'opening_hours', 'rating', 'website']
    };

    combinedMapObject.googleMap.getDetails(request, (place, status) => {
      if (status !== 'OK') {
        return false;
      } else {
        this.setState({ placeObject: place });
        this.gymListRender();
      }
    });
  }
  gymListRender() {
    fetch(`/api/gym-list.php?placeId=${this.state.placeObject.place_id}&userName=${this.props.currentUser.username}`)
      .then(result => result.json())
      .then(result => {
        this.setState({
          gymListArr: result
        });
      });

    if (this.state.placeObject.photos) {
      for (let i = 0; i < this.state.placeObject.photos.length; i++) {
        let photo = (this.state.placeObject.photos[i].getUrl());
        this.photoArray.push(photo);
      }
    }
  }
  insertGymData() {
    const gymData = {
      name: this.state.placeObject.name,
      place_id: this.state.placeObject.place_id,
      username: this.props.currentUser.username
    };

    this.props.addGym(gymData);
  }
  removeGymData() {
    const gymData = {
      name: this.state.placeObject.name,
      place_id: this.state.placeObject.place_id,
      username: this.props.currentUser.username
    };

    this.props.deleteGym(gymData);
  }
  render() {
    const { placeObject, gymListArr } = this.state;
    const isLoggedIn = this.props.isLoggedIn;
    let element, hours, rating, photos;
    let button = '';

    if (isLoggedIn) {
      button = <button className="btn gym__button" onClick={() => { this.insertGymData(); }}>Set Gym</button>;
      if (placeObject && this.props.currentUser.gymid === placeObject.place_id) {
        button = <button className="btn gym__button remove" onClick={() => { this.removeGymData(); }}>Remove</button>;
      }

      if (!gymListArr.length) {
        element = <div className="buddy__none">
          <img src="https://cdn4.iconfinder.com/data/icons/faces-10/96/sadness-512.png" alt="no friends" className="buddy__card-photo" />
          <div className="gym__view-message">No Gym Buddy Users</div>
        </div>;
      } else {
        element = gymListArr.map(element => {
          const placeObject = this.props.view.params;
          const setViewMethod = () => this.props.setView('buddy', 'gym', { element, placeObject });
          return <GymUserListItem key={element.id} userInfo={element} setViewMethod={setViewMethod} />;
        });
      }
    } else {
      element = <div className="buddy__none">
        <div className="gym__view-message">Log in to see Gym Buddies</div>
      </div>;
    }

    if (placeObject) {
      let website;
      if (!placeObject.opening_hours) {
        hours = <h3>No Schedule Available</h3>;
      } else {
        hours = placeObject.opening_hours.weekday_text.map((opening, index) => {
          return <div key={index} opening={opening}>{opening} </div>;
        });
      }

      if (!placeObject.rating) {
        rating = <h3>No Ratings </h3>;
      } else {
        rating = <h3>Rating: {placeObject.rating.toFixed(1)}</h3>;
      }

      if (!this.photoArray.length) {
        photos = <h3 className="gym__view-nophotos" >No Photos Available </h3>;
      } else {
        photos = <GymCarousel photoArray={this.photoArray} />;
      }

      if (!placeObject.website) {
        website = 'No Website';
      } else {
        website = 'Visit Website';
      }

      return (
        <div className="main__container">
          <Header name={this.props.view.name} prevName={this.props.view.prevName} setView={this.props.setView} gymName={placeObject.name} isLoggedIn={this.props.isLoggedIn} placeObject={this.props.view.params}/>
          <div className="gym__view-container">
            <div className="gym__view-carousel-container">
              { photos }
            </div>
            <div className="gym__view-info-container">
              <div className="gym__view-info-name-and-button-container">
                <h2 className="gym__view-name">{placeObject.name}</h2>
                { button }
              </div>
              <div className="gym__view-info-address-and-hours-container">
                <h3>Address:</h3>
                <div className="gym__view-address">{placeObject.formatted_address}</div>
                <h3>Phone Number:</h3>
                <div className="gym__view-address">{placeObject.formatted_phone_number}</div>
                <div className="gym__view-rating-container">
                  <div className="gym__view-hours">
                    <h3>Hours:</h3>
                    { hours }
                  </div>
                  <div className="gym__view-rating">
                    { rating }
                    <a className="gym__view-link" rel="noopener noreferrer" target="_BLANK" href={placeObject.website}>{website}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="gym__view-list">
              { element }
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
      );
    }

  }
}
