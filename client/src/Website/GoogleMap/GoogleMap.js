import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import './GoogleMap.css';

const Marker = ({ text }) => <div className="marker">{text}</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 32.7880531,
      lng: 35.0157215
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div id="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBCUA4NRmTVM04qcCqvknDP1nSe7ybtYG8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={32.7880531}
            lng={35.0157215}
            text={'Company Info'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
