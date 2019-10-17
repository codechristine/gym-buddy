import React from 'react';

export default class GoogleMaps extends React.Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }
  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);
    this.props.onMapLoad(map);
    this.props.updateMap(map);
  }
  componentDidMount() {
    if (!window.google) {
      // var s = document.createElement('script');
      // s.type = 'text/javascript';
      // var x = document.getElementsByTagName('script')[0];
      // x.parentNode.insertBefore(s, x);
      // s.addEventListener('load', e => {
      this.onScriptLoad();
      // });
    } else {
      this.onScriptLoad();
    }
  }
  // createInfoWindow(e, map) {
  //   const infoWindow = new window.google.maps.InfoWindow({
  //     content: '<div id="infoWindow" />',
  //     position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
  //     // position: { lat: location.lat, lng: location.lng }
  //   });
  //   infoWindow.addListener('click', e => {
  //     return (
  //       function InfoWindow(props) {
  //         // const { classes } = props;
  //         return <div>{props}</div>;
  //       });
  //   });
  //   infoWindow.open(map);
  // }

  render() {
    return (
      <div className="map__view-map" id={this.props.id} />
    );
  }
}
