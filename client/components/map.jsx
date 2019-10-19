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
  }
  componentDidMount() {
    this.onScriptLoad();
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
