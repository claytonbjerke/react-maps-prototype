const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createClass({

    render() {
        return (
            <div>
                hi lol!
            </div>
        );
    }
});

ReactDOM.render( <App/> , window.document.getElementById('target'));
