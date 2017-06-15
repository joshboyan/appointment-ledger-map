import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Panel, FormGroup, ControlLabel, Radio } from 'react-bootstrap';
import AppointmentFormLocation from'./AppointmentFormLocation';

class AppointmentFormDirections extends Component {
  render() {
    return (
      <Panel header="Directions" bsStyle="danger">
        <FormGroup controlId="Start">
          <ControlLabel>Start Location</ControlLabel>
          <AppointmentFormLocation
                updateDestination={this.props.handleStartChange}
                address={this.props.address}
                placeholder='Start Location' />
        </FormGroup>
        <FormGroup>
          <p>I will travel by:</p>
            <Radio name="radioGroup" onClick={() => console.log('hey')} inline>
              Personal Vehicle
            </Radio>
            {' '}
            <Radio name="radioGroup" inline>
              Public Transit
            </Radio>
            {' '}
            <Radio name="radioGroup" inline>
              Bike
            </Radio>
            {' '}
            <Radio name="radioGroup" inline>
              Foot
            </Radio>
        </FormGroup >
      </Panel>
    )
  }
}

export default AppointmentFormDirections;