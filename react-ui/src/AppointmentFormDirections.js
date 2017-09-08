/* global google*/
/**
 * This is the part of the form labeled "Directions". It contains
 * code to use the Geolocation browser API 
 * (https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation)
 *  and Google's geolocation service
 * (https://developers.google.com/maps/documentation/geolocation/intro)
 *  to store it in a form that can be used to generate a map.
 */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Panel, FormGroup, ControlLabel, Radio, Button } from 'react-bootstrap';
import AppointmentFormLocation from'./AppointmentFormLocation';
import MdLocationSearching from 'react-icons/lib/md/location-searching';

class AppointmentFormDirections extends Component {
  constructor(props) {
    super(props)
    this.geolocation = this.geolocation.bind(this);
  }
  geolocation() {
    const that = this;
    if ('geolocation' in navigator) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      function success(pos) {
        const position = pos.coords;
        that.props.handleOriginChange(new google.maps.LatLng(position.latitude, position.longitude));
      };

      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      };
      navigator.geolocation.getCurrentPosition(success, error, options);
      
    } else {
      alert('Geolocation is not currently available')
    }
  }
  render() {
    return (
      <Panel header="Directions" bsStyle="danger">
        <FormGroup
          className='radio'>
          <p>I will travel by:</p>
            <Radio name="radioGroup" 
                   onClick={() => this.props.travelMode('DRIVING')} 
                   inline
                   defaultChecked>
              Driving
            </Radio>
            {' '}
            <Radio name="radioGroup"
                   onClick={() => this.props.travelMode('TRANSIT')}
                   inline>
              Public Transit
            </Radio>
            {' '}
            <Radio name="radioGroup"
                   onClick={() => this.props.travelMode('BICYCLING')}
                   inline>
              Bicycle
            </Radio>
            {' '}
            <Radio name="radioGroup"
                   onClick={() => this.props.travelMode('WALKING')}
                   inline>
              Walking
            </Radio>
        </FormGroup>
        <FormGroup controlId="origin">
          <ControlLabel>Start Location</ControlLabel>
          <AppointmentFormLocation
                updateDestination={this.props.handleOriginChange}
                address={this.props.address}
                placeholder='Start Location' />
        </FormGroup>
        <Button 
          bsStyle='link'
          className='geolocation'
          onClick={this.geolocation}>
          <MdLocationSearching /> Use Current Location
        </Button>
      </Panel>
    )
  }
}

export default AppointmentFormDirections;