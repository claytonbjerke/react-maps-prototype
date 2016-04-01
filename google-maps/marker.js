import React from 'react';

var Marker = React.createClass({

  getInitialState() {
        return {
            props: {}
        };
    },

  componentDidMount() {
    this.setState({
      props: this.props
    });
  },

  setMarkerOnMap() {
    new google.maps.Marker({
      position: {
        lat: this.props.lat,
        lng: this.props.lng
      },
      map: this.props.map
    });
  },

  render() {

    this.setMarkerOnMap();

    return (
      null
    );
  }
});

export default Marker;
