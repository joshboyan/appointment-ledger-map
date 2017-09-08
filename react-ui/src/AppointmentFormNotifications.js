/**
 * This file contains the markup for the user to choose notification times
 * (not yet implemented)
 */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Panel, FormGroup, Checkbox } from 'react-bootstrap';

class AppointmentFormNotifications extends Component {
  render() {
    return(
      <Panel header="Notifications" bsStyle="danger">
        <FormGroup>
          <p>Notify Me:</p>
          <Checkbox inline>
            30 minutes
          </Checkbox>
          {' '}
          <Checkbox inline>
            1 hour
          </Checkbox>
          {' '}
          <Checkbox inline>
            2 hours
          </Checkbox>
          {' '}
          <Checkbox inline>
            3 hours
          </Checkbox>
          {' '}<Checkbox inline>
            24 hours
          </Checkbox>
          <p>Before my Appointment</p>
        </FormGroup>
      </ Panel>
    )
  }
}
export default AppointmentFormNotifications;