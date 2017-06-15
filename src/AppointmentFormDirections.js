import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Panel, FormGroup, ControlLabel, Radio } from 'react-bootstrap';
import AppointmentFormLocation from'./AppointmentFormLocation';

class AppointmentFormDirections extends Component {
  render() {
    return (
      <Panel header="Directions" bsStyle="danger">
        <FormGroup controlId="origin">
          <ControlLabel>Start Location</ControlLabel>
          <AppointmentFormLocation
                updateDestination={this.props.handleOriginChange}
                address={this.props.address}
                placeholder='Start Location' />
        </FormGroup>
        <FormGroup>
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
        </FormGroup >
      </Panel>
    )
  }
}

export default AppointmentFormDirections;