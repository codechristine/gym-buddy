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

  render() {
    return (
      <div className="map__view-map" id={this.props.id} />
    );
  }
}
