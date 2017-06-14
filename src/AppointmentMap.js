/*global google*/
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps';

const DirectionsExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={props.center}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

class AppointmentMap extends Component {
  constructor(props){
    super(props)
    this.state = {
      origin: new google.maps.LatLng(41.8507300, -87.6512600),
      destination: this.props.destination,
      directions: null,
      style: { 
        position: 'relative',
        height: '500px',
        width: '100%' 
      }
    }
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
          directions: result
        });
         google.maps.event.trigger(GoogleMap, 'resize')
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  }
  render() {
    return (
      <DirectionsExampleGoogleMap
        containerElement={
          <div style={this.state.style} />
        }
        mapElement={
          <div style={this.state.style} />
        }
        center={this.state.origin}
        directions={this.state.directions}
        resetBoundsOnResize={true}
      />
    );
  }
}

export default AppointmentMap;