/*global google*/
/**
 * This componet generates a google map with the starting/ ending 
 * points and the travel path for the appointment commute. 
 * https://github.com/tomchentw/react-google-maps/tree/master/src/lib
 * After that, * it displays the directions step by step.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps';
import { Button, Panel } from 'react-bootstrap';

// Google maps instance
const DirectionsExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap>
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

class AppointmentMap extends Component {
  constructor(props){
    super(props)
    this.state = {
      origin: this.props.origin,
      destination: this.props.destination,
      directions: null,
      distance: null,
      duration: null,
      durationText: null,
      style: { 
        position: 'relative',
        height: '500px',
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto 15px auto'
      },
      open: false,
      userDirections: []      
    }
    this.duration = this.duration.bind(this);
  }

  duration(duration) {
    this.props.getDuration(duration);
  }

  // Call the map with our origin and destination and get all the
  // ancillary trip info
  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService();
    DirectionsService.route({
      // If the origin was obtained with Geolocation change it back to useable form
      origin: this.state.origin.includes('{') ?
        JSON.parse(this.state.origin) : 
        this.state.origin,
      destination: this.state.destination,
      travelMode: this.props.travelMode,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        let directionsResult = result.routes[0].legs[0].steps;
        let directions = []
        directionsResult.map(step => {
           return directions.push(step.instructions)
        });
        this.setState({          
          directions: result,
          userDirections: directions,
          distance: result.routes[0].legs[0].distance.text,
          duration: result.routes[0].legs[0].duration.value,
          durationText: result.routes[0].legs[0].duration.text,
        }, function() {
          console.log('duration in map', this.state.duration)
          this.duration(this.state.duration);
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  }

  render() {
    return (
      <div>
        <DirectionsExampleGoogleMap
          containerElement={
            <div style={this.state.style} />
          }
          mapElement={
            <div style={this.state.style} />
          }
          center={this.state.origin}
          directions={this.state.directions}
        />
        <Button 
          bsStyle="info" 
          onClick={ ()=> this.setState({ open: !this.state.open })}>   
          Directions         
        </Button>
        <Panel
          className='directions' 
          expanded={this.state.open}
          collapsible>
          <h4>Distance: {this.state.distance}</h4>
          <h4>Trip Time: {this.state.durationText}</h4>
          {this.state.userDirections.map((step, i) => {
            function createMarkup() {
              return {__html: step};
            }   
            return (
              <div key={i}>
                <hr />
                <h5>Step {i+1}</h5>
                <div dangerouslySetInnerHTML={createMarkup()} />
              </div>
            )
          })}
        </Panel>
      </div>
    );
  }
}

AppointmentMap.PropTypes = {
  origin: PropTypes.string,
  destination:  PropTypes.string,
  getDuration: PropTypes.func
}
export default AppointmentMap;