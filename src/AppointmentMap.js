/*global google*/
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps';
import { Button, Panel } from 'react-bootstrap';

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
      title: this.props.title,
      origin: new google.maps.LatLng(41.8507300, -87.6512600),
      destination: this.props.destination,
      directions: null,
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
        let directionsResult = result.routes[0].legs[0].steps;
        let directions = []
        directionsResult.map(step => {
           return directions.push(step.instructions)
        });        
        console.log(result);
        this.setState({          
          directions: result,
          userDirections: directions
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
          resetBoundsOnResize={true}
        />
        <Button 
          bsStyle="info" 
          onClick={ ()=> this.setState({ open: !this.state.open })}>   
          Directions         
        </Button>
        <Panel 
          bsStyle='info' 
          expanded={this.state.open}
          collapsible>
          {this.state.userDirections.map((step, i) => {
            function createMarkup() {
              return {__html: step};
            }   
            return (
              <div key={i}>
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

export default AppointmentMap;