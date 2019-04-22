import React from "react";
import MapGL from 'react-map-gl';

class Maps extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      style: 'mapbox://styles/mapbox/light-v9',
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        longitude: -74,
        latitude: 40.7,
        zoom: 11,
        maxZoom: 16
      }
    };
  }

  render() {
    return (
      <div>
        <MapGL {...this.state.viewport} 
          mapboxApiAccessToken={
            "pk.eyJ1IjoibmVpbHZyIiwiYSI6ImNqcjZweWM0OTA2Zms0NHBmbHZ0MnRmdXAifQ.esuWCmOiK2Jn5NT7SUYdJQ"
          }
        mapStyle={this.state.style} />
      </div>
    );
  }
}

export default Maps;