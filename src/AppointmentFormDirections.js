import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Panel, FormGroup, ControlLabel,
         FormControl, Radio } from 'react-bootstrap';

class AppointmentFormDirections extends Component {
  render() {
    return (
      <Panel header="Directions" bsStyle="danger">
        <FormGroup controlId="Start">
          <ControlLabel>Start</ControlLabel>
          <FormControl type="text" placeholder="Start"/>
        </FormGroup>
        <FormGroup>
          <p>I will travel by:</p>
            <Radio name="radioGroup" inline>
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