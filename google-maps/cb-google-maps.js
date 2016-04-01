import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMaps from './google-maps';

const CBGoogleMaps = React.createClass({

    map: null,

    getInitialState() {
        return {
            isMapCreated: false
        };
    },

    componentDidMount() {
        this.setState({
            callbackIndex: GoogleMaps.load(this.props.params, this.mapsCallbacks)
        });
    },

    componentWillReceiveProps(nextProps) {
        if (this.map) {
            this.map.setOptions({
                ...nextProps,
                center: new google.maps.LatLng(nextProps.lat, nextProps.lng)
            });
        }
    },

    mapsCallbacks() {
        this.createMap();
    },

    createMap() {
        const node = ReactDOM.findDOMNode(this);
        this.map = new google.maps.Map(node, {
            ...this.props,
            center: new google.maps.LatLng(this.props.lat, this.props.lng)
        });
        this.setState({
            isMapCreated: true
        });
        if (this.props.onMapCreated) {
            this.props.onMapCreated(this.map);
        }
    },

    getChildren() {
        return React.Children.map(this.props.children, (child) => {
            if (!React.isValidElement(child)) {
                return child;
            }
            return React.cloneElement(child, {
                ref: child.ref,
                map: this.map
            });
        })
    },

    render() {

        const styles = {
            width: this.props.width,
            height: this.props.height
        };

        return (
            <div style={styles}>
                {this.state.isMapCreated ? this.getChildren() : null}
            </div>
        );
    }

});

export default CBGoogleMaps;
