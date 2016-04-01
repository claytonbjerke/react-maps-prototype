import React from 'react';
import ReactDOM from 'react-dom';
import CBGoogleMaps from './google-maps/cb-google-maps';
import Marker from './google-maps/marker';

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

  componentDidMount() {
      this.setState({
          markers: MockCoords.lineSet
      })
  },

  render() {

    const center = this.state.center;
    const markers = this.state.markers;

    return (
      <div>
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
                      lat={marker.lat}
                      lng={marker.lng}/>
                );
            })}
        </CBGoogleMaps>
      </div>
    );
  }
});

ReactDOM.render(<App/>, window.document.getElementById('target'));
