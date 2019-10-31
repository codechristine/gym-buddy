import React from 'react';
import Header from './header';
import GymCarousel from './gymcarousel';
import GymUserListItem from './gym-user-list';

export default class GymView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeObject: null,
      gymListArr: [],
      filterCategory: null,
      filterValue: null,
      inFilter: false
    };
    this.insertGymData = this.insertGymData.bind(this);
    this.removeGymData = this.removeGymData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleChange(event) {
    const eventTarget = event.target.name;
    switch (eventTarget) {
      case 'category':
        this.setState({ filterCategory: event.target.value });
        break;
      case 'value':
        this.setState({ filterValue: event.target.value });
        break;
    }
  }
  handleSubmit(event) {
    event.preventDefault();

    fetch(`/api/gym-list.php?placeId=${this.state.placeObject.place_id}&userName=${this.props.currentUser.username}
          &category=${this.state.filterCategory}&value=${this.state.filterValue}`)
      .then(result => result.json())
      .then(result => {
        this.setState({
          gymListArr: result,
          inFilter: true
        });
      });
  }
  render() {
    const { placeObject, gymListArr, inFilter } = this.state;
    const isLoggedIn = this.props.isLoggedIn;
    const signUp = () => this.props.setView('signup', 'home', {});
    const logIn = () => this.props.setView('login', 'home', {});
    let element, hours, rating, photos, websiteClass;
    let button = '';
    let filterElement = '';

    if (isLoggedIn) {
      button = <button className="btn gym__button set" onClick={() => { this.insertGymData(); }}>Set Gym</button>;

      if (placeObject && this.props.currentUser.gymid === placeObject.place_id) {
        button = <button className="btn gym__button remove" onClick={() => { this.removeGymData(); }}>Remove</button>;
      }

      const filterForm =
      <form className="gym__view-filter" onSubmit={this.handleSubmit}>
        <select name="category" onChange={this.handleChange} >
          <option value="">Category</option>
          <option value="weightlifting">Weight Lifting</option>
          <option value="cardio">Cardio</option>
          <option value="yoga">Yoga</option>
          <option value="bodybuilding">Body Building</option>
          <option value="swimming">Swimming</option>
        </select>
        <select name="value" onChange={this.handleChange} >
          <option value="">Skill</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">intermediate</option>
          <option value="expert">Expert</option>
        </select>
        <button className="btn gym__button-filter" type="submit">Filter</button>
      </form>;

      if (!gymListArr.length) {
        element = <div className="buddy__none">
          <img src="https://cdn4.iconfinder.com/data/icons/faces-10/96/sadness-512.png" alt="no friends" className="buddy__card-photo" />
          <div className="gym__view-message">No Gym Buddy Users</div>
        </div>;
        if (inFilter) {
          filterElement = filterForm;
        }
      } else {
        filterElement = filterForm;
        element = gymListArr.map(element => {
          const placeObject = this.props.view.params;
          const setViewMethod = () => this.props.setView('buddy', 'gym', { element, placeObject });
          return <GymUserListItem key={element.id} userInfo={element} setViewMethod={setViewMethod} currentUser={this.props.currentUser}/>;
        });
      }
    } else {
      element = <div className="buddy__none">
        <div className="gym__view-message">Log in to see Gym Buddy Users</div>
        <div className="gym__view-buttons">
          <button className="btn gym__button" onClick={signUp}> Sign Up </button>
          <button className="btn gym__button" onClick={logIn}> Log In </button>
        </div>
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
        websiteClass = 'website__none';
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
                    <a className={`gym__view-link ${websiteClass}`} rel="noopener noreferrer" target="_BLANK" href={placeObject.website}>{website}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="gym__view-list">
              { filterElement }
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
