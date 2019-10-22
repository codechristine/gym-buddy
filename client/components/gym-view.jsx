import React from 'react';
import Header from './header';

export default class GymView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeObject: null
    };
    this.photoArray = [];
    this.slideIndex = 1;
    this.showSlides = this.showSlides.bind(this);
    this.plusSlides = this.plusSlides.bind(this);
    this.currentSlide = this.currentSlide.bind(this);
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
      }
    });
  }
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }
  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }
  showSlides(n) {
    // let i;
    let slides = this.photoArray;
    // let dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    // for (i = 0; i < slides.length; i++) {
    //   slides[i].style.display = 'none';
    // }
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(' active', '');
    // }
    // // slides[this.slideIndex - 1].style.display = 'block';
    // dots[this.slideIndex - 1].className += ' active';
  }
  render() {

    const { placeObject } = this.state;
    if (placeObject) {
      for (let i = 0; i < placeObject.photos.length; i++) {
        let photo = (placeObject.photos[i].getUrl());
        this.photoArray.push(photo);
      }
    }

    if (placeObject) {
      return (
        <div className="main__container">
          <Header name={this.props.view.name} prevName={this.props.view.prevName} setView={this.props.setView} gymName={placeObject.name} isLoggedIn={this.props.isLoggedIn} params={this.props.view.params}/>
          <div className="gym__view-container">
            <div className="gym__view-slideshow-container">
              <img className="gym__view-photos" src={this.photoArray} />
              <a className="prev" onClick={this.plusSlides(-1)}>&#10094;</a>
              <a className="next" onClick={this.plusSlides(1)}>&#10095;</a>
            </div>
            <div className="gym__view-dot-container">
              <span className="dot" onClick={this.currentSlide(1)}></span>
              <span className="dot" onClick={this.currentSlide(2)}></span>
              <span className="dot" onClick={this.currentSlide(3)}></span>
            </div>
            <div className="gym__view-info-container">
              <div className="gym__view-info-name-and-button-container">
                <h2 className="gym__view-name">{placeObject.name}</h2>
                <button className="gym__view-button">Add Gym</button>
              </div>
              <div className="gym__view-info-address-and-hours-container">
                <h3>Address:</h3>
                <div className="gym__view-address">{placeObject.formatted_address}</div>
                <h3>Hours:</h3>
                {placeObject.opening_hours.weekday_text.map((opening, index) => {
                  return <div className="gym__view-hours" key={index} opening={opening}>{opening} </div>;
                })}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>no data...</div>
      );
    }

  }
}
