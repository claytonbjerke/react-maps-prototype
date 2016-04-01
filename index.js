const React = require('react');
const ReactDOM = require('react-dom');
import CBGoogleMaps from './google-maps/cb-google-maps';
import Marker from './google-maps/marker';

const App = React.createClass({

  render() {

    const coords = {
      lat: 35.222195,
      lng: -97.353287
    };

    return (
      <div>
        hi lol
        <CBGoogleMaps
            width={'400px'}
            height={'300px'}
            lat={coords.lat}
            lng={coords.lng}
            zoom={12}
            params={{v: '3.exp'}}>
            <Marker
              lat={coords.lat}
              lng={coords.lng}/>
        </CBGoogleMaps>
      </div>
    );
  }
});

ReactDOM.render(<App/>, window.document.getElementById('target'));
