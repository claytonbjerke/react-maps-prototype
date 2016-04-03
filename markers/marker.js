import React from 'react';

var Marker = React.createClass({

  marker: {},

  getInitialState() {
        return {
            props: {}
        };
    },

  componentDidMount() {
    this.setState({
      props: this.props
    });
    this.setMarkerOnMap();
    this.setOnMarkerMoveListener();
  },

  setMarkerOnMap() {
    this.marker = new google.maps.Marker({
      position: {
        lat: this.props.lat,
        lng: this.props.lng
      },
      map: this.props.map
    });
  },

  setOnMarkerMoveListener() {
    let moveMarkerEvent = 'move-marker-event-' + this.props.id;
    this.props.eventEmitter.on(moveMarkerEvent, (coords) => {
      console.log(this.props.id);
      this.marker.setPosition(new google.maps.LatLng(35.187690, -97.352257));
    });
  },

  render() {

    return (
      null
    );
  }
});

export default Marker;
