import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Panel, FormGroup, ControlLabel, Radio, Button } from 'react-bootstrap';
import AppointmentFormLocation from'./AppointmentFormLocation';
import MdLocationSearching from 'react-icons/lib/md/location-searching';

class AppointmentFormDirections extends Component {
  render() {
    return (
      <Panel header="Directions" bsStyle="danger">
        <FormGroup
          className='radio'>
          <p>I will travel by:</p>
            <Radio name="radioGroup" 
                   onClick={() => this.props.travelMode('DRIVING')} 
                   inline>
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
          className='geolocation'>
          <MdLocationSearching /> Use Current Location
        </Button>
      </Panel>
    )
  }
}

export default AppointmentFormDirections;