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
    this.photoArray = [];
  }
  componentDidMount() {
    const combinedMapObject = this.props.view.params;

    let request = {
      placeId: combinedMapObject.currentLocation.placeId,
      fields: ['photo', 'name', 'place_id', 'formatted_address', 'opening_hours', 'rating']
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
    fetch(`/api/gym-list.php?placeId=${this.state.placeObject.place_id}`)
      .then(result => result.json())
      .then(result => {
        this.setState({
          gymListArr: result
        });
      });

    for (let i = 0; i < this.state.placeObject.photos.length; i++) {
      let photo = (this.state.placeObject.photos[i].getUrl());
      this.photoArray.push(photo);
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
  render() {
    const { placeObject, gymListArr } = this.state;
    const isLoggedIn = this.props.isLoggedIn;
    let element;
    let button = '';

    if (isLoggedIn) {
      button = <button className="btn gym__button" onClick={() => { this.insertGymData(); }}>Set Gym</button>;
      if (!gymListArr.length) {
        element = <div className="buddy__none">
          <img src="https://cdn4.iconfinder.com/data/icons/faces-10/96/sadness-512.png" alt="no friends" className="buddy__card-photo" />
          <div className="gym__view-message">No Gym Buddy Users</div>
        </div>;
      } else {
        element = gymListArr.map(element => {
          return <GymUserListItem key={element.id} userInfo={element} />;
        });
      }
    } else {
      element = <div className="buddy__none">
        <div className="gym__view-message">Log in to see Gym Buddies</div>
      </div>;
    }

    if (placeObject) {
      return (
        <div className="main__container">
          <Header name={this.props.view.name} prevName={this.props.view.prevName} setView={this.props.setView} gymName={placeObject.name} isLoggedIn={this.props.isLoggedIn} params={this.props.view.params}/>
          <div className="gym__view-container">
            <div className="gym__view-carousel-container">
              <GymCarousel photoArray = {this.photoArray} />
            </div>
            <div className="gym__view-info-container">
              <div className="gym__view-info-name-and-button-container">
                <h2 className="gym__view-name">{placeObject.name}</h2>
                { button }
              </div>
              <div className="gym__view-info-address-and-hours-container">
                <h3>Address:</h3>
                <div className="gym__view-address">{placeObject.formatted_address}</div>
                <div className="gym__view-rating-container">
                  <div className="gym__view-hours">
                    <h3>Hours:</h3>
                    {placeObject.opening_hours.weekday_text.map((opening, index) => {
                      return <div key={index} opening={opening}>{opening} </div>;
                    })}
                  </div>
                  <div className="gym__view-rating">
                    <h3>Rating: {placeObject.rating.toFixed(1)}</h3>
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
