import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { Button, Panel, FormGroup, ControlLabel,
         FormControl, HelpBlock, Radio, Checkbox } from 'react-bootstrap';
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';

class AppointmentForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      open: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  

  render() {
    const style = {
      width: '100%'
    }
    function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      );
    }
    return (
      <div>
        <Button bsStyle="primary" style={style} onClick={ ()=> this.setState({ open: !this.state.open })}>
          <p><MdAddCircleOutline /> Add Appointment</p>
        </Button>
        <Panel bsStyle='primary' collapsible expanded={this.state.open}>
          
          <form>
            <FieldGroup
              id="formControlsText"
              type="text"
              label="Appointment Title"
              placeholder="Appointment Title"
            />
            <DatePicker
              bsStyle={style}
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
            <FieldGroup
              id="formControlsText"
              type="text"
              label="Location"
              placeholder="Location"
            />
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Description and Notes</ControlLabel>
              <FormControl componentClass="textarea" placeholder="Description and Notes" />
            </FormGroup>
            <FieldGroup
              id="formControlsFile"
              type="file"
              label="Attachments"
              help="Add any attachments or relevant materials here(up to 3mb)"
            />
            <Panel header="Directions" bsStyle="danger">
              <FieldGroup
              id="formControlsText"
              type="text"
              label="Starting Location"
              placeholder="Starting Location"
            />
            <FormGroup>
                <p>I will travel by:</p>
              <Radio inline>
                    Personal Vehicle
                  </Radio>
                  {' '}
                  <Radio inline>
                    Public Transit
                  </Radio>
                  {' '}
                  <Radio inline>
                    Bike
                  </Radio>
                  {' '}
                  <Radio inline>
                    Foot
                  </Radio>
              </FormGroup >
            </Panel>
            <Panel header="Notifications" bsStyle="danger">
              <FormGroup>
                <p>Notify Me:</p>
              <Checkbox inline>
                    5 minutes
                  </Checkbox>
                  {' '}
                  <Checkbox inline>
                    15 minutes
                  </Checkbox>
                  {' '}
                  <Checkbox inline>
                    30 minutes
                  </Checkbox>
                  {' '}
                  <Checkbox inline>
                    1 hour
                  </Checkbox>
                  {' '}<Checkbox inline>
                    2 hours
                  </Checkbox>
                  <p>Before my Appointment</p>
              </FormGroup>
            </ Panel> 
          </form>
          
        </ Panel>
        
        
      </div>
    );
  }
}

// AppointmentForm.propTypes = {};

export default AppointmentForm;
