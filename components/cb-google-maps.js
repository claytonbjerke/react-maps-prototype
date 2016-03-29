import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMaps from '.././utils/google-maps';

const CBGoogleMaps = React.createClass({

  map: null,

  getInitialState() {
    return {
      isMapCreated: false
    };
  },

  componentDidMount() {
    this.setState({
      callbackIndex: GoogleMaps.load(null, this.mapsCallbacks)
    });
  },

  mapsCallbacks() {
    this.createMap();
  },

  createMap() {
    const node = ReactDOM.findDOMNode(this);
    this.map = new google.maps.Map(node, {
      //...this.props,
      center: new google.maps.LatLng(this.props.lat, this.props.lng)
    });
    this.setState({
      isMapCreated: true
    });
    if(this.props.onMapCreated) {
      this.props.onMapCreated(this.map);
    }
  },

  render() {
    return (
      <div>hi again lol</div>
    );
  }

});

export default CBGoogleMaps;
