import React from 'react';
import ReactDOM from 'react-dom';
import { EventEmitter } from 'events';

import CBGoogleMaps from './google-maps/cb-google-maps';
import Marker from './markers/marker';
import MockCoords from './mock-data/mock-coords';

const App = React.createClass({

  getInitialState() {
    return {
      center: {
        lat: 35.222195,
        lng: -97.353287
      },
      markers: []
    };
  },

  componentWillMount() {
    this.eventEmitter = new EventEmitter();
  },

  componentDidMount() {
      this.setState({
          markers: MockCoords.lineSet
      })
      setInterval(this.updateMarker, 3000);
  },

  updateMarker() {

    let max = this.state.markers.length;
    let min = 0;
    let randomIndex = Math.floor(Math.random() * (max - min)) + min;
    let randomMarker = this.state.markers[randomIndex];
    let userId = randomMarker.userId;
    let moveMarkerEvent = 'move-marker-event-' + userId;
    let coords = {
      lat: randomMarker.lat,
      lng: randomMarker.lng
    }

    this.eventEmitter.emit(moveMarkerEvent, coords);
  },

  render() {

    const center = this.state.center;
    const markers = this.state.markers;

    return (
        <CBGoogleMaps
            width={'400px'}
            height={'300px'}
            lat={center.lat}
            lng={center.lng}
            zoom={12}
            params={{v: '3.exp'}}>
            {markers.map((marker, index) => {
              return (
                    <Marker
                      key={index}
                      id={marker.userId}
                      lat={marker.lat}
                      lng={marker.lng}
                      eventEmitter={this.eventEmitter}/>
                );
            })}
        </CBGoogleMaps>
    );
  }
});

ReactDOM.render(<App/>, window.document.getElementById('target'));
