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
  render() {
    return (
      <div className="map__view-map" id={this.props.id} />
    );
  }
}
