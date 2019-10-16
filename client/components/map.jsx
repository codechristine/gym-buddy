import React from 'react';

class GoogleMaps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      infowindow: null
    };
    // this.lat = this.props.location.lat;
    // this.lng = this.props.location.lng;
    // this.service = null;
    // this.googleMap = new google();
    // this.irvine = new google.maps.LatLng(39.880118, -101.447183);
    this.initMap = this.initMap.bind(this);
  }
  initMap() {
    // fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=gym&key=AIzaSyBX55x9y93nyNBurxkSqOGYeYBV1YfeA9Q', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    //   // body: JSON.stringify(data)
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log(result);
    //     // this.setState({
    //     //   map: new google.maps.Map(document.getElementById('map'), {
    //     //     center: irvine,
    //     //     zoom: 15
    //     //   }),
    //     //   infowindow: new google.maps.InfoWindow()
    //   })
    //   .catch(error => console.error('fetch error:', error));

    var irvine = this.googleMap.maps.LatLng(39.880118, -101.447183);

    this.infowindow = new this.google.maps.InfoWindow();

    this.map = new this.google.maps.Map(document.getElementById('map'), {
      center: irvine,
      zoom: 15
    });

    // var request = {
    //   location: irvine,
    //   radius: '500',
    //   query: 'gym'
    // };

    // this.service = new google.maps.places.PlacesService(this.map);
    // this.service.textSearch(request, this.callback);
  }

  // getCurrentLocation(data) {
  //   navigator.geolocation

  //   var dataObject = data;
  //   latitude = dataObject.coords.latitude;
  //   longitude = dataObject.coords.longitude;

  //   googleMap.currentLocationOfUser(latitude, longitude);

  //   this.infoWindow.setPosition(new google.maps.LatLng(lat, long));
  //   this.infoWindow.setContent('You Are Here');
  //   this.infoWindow.open(this.map);
  //   this.map.setCenter(new google.maps.LatLng(lat, long));
  //   this.map.setZoom(12);
  // }
  // callback(results, status) {
  //   if (status === google.maps.places.PlacesServiceStatus.OK) {
  //     for (var i = 0; i < results.length; i++) {
  //       var place = results[i];
  //       this.createMarker(results[i]);
  //     }
  //     this.map.setCenter(results[0].geometry.location);
  //   }
  // }
  // createMarker(place) {
  //   var marker = new google.maps.Marker({
  //     map: this.map,
  //     position: place.geometry.location
  //   });

  //   new google.maps.event.addListener(marker, 'click', function () {
  //     this.infowindow.setContent(place.name);
  //     this.infowindow.open(this.map, this);
  //   });
  // }
  render() {
    this.initMap();
    return (
      <div className="container">
        map
        {/* <div id="map"></div>
          <script
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBX55x9y93nyNBurxkSqOGYeYBV1YfeA9Q&libraries=places&callback=initMap"
            async defer></script> */}
      </div>
    );
  }
}
export default GoogleMaps;
