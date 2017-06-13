/*global google*/
import React, { Component } from "react";
import { withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps";

const DirectionsExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={props.center}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

export default class AppointmentMap extends Component {

  state = {
    origin: new google.maps.LatLng(41.8507300, -87.6512600),
    destination: this.props.destination,
    directions: null,
  }

  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService();
    console.log(this.props.destination);
    DirectionsService.route({
      origin: this.state.origin,
      destination: this.state.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  }
  render() {
    return (
      <DirectionsExampleGoogleMap
        containerElement={
          <div style={{ height: '500px',
                        width: '500px' }} />
        }
        mapElement={
          <div style={{ height: '500px',
                        width: '100%' }} />
        }
        center={this.state.origin}
        directions={this.state.directions}
      />
    );
  }
}