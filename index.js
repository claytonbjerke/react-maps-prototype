const React = require('react');
const ReactDOM = require('react-dom');
import CBGoogleMaps from './components/cb-google-maps';

const App = React.createClass({

  render() {

    const coords = {
      lat: 51.5258541,
      lng: -0.08040660000006028
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
        </CBGoogleMaps>
      </div>
    );
  }
});

ReactDOM.render(<App/>, window.document.getElementById('target'));
