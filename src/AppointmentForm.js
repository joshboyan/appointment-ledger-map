import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Button, Panel, FormGroup, ControlLabel,
         FormControl, HelpBlock, Radio, Checkbox } from 'react-bootstrap';
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';
import AppointmentFormDatePicker from './AppointmentFormDatePicker';
import AppointmentFormTimePicker from './AppointmentFormTimePicker';
import './AppointmentForm.css';

class AppointmentForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      appointmentTitle: '',
      appointmentDate: '',
      appointmentTime: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }
  handleTitleChange(e) {
    this.setState({
      appointmentTitle: e.target.value
    });
  }
  handleDateChange(date) {
    this.setState({
      appointmentDate: date
    });
  }
  handleTimeChange(value) {
    this.setState({
      appointmentTime: value
    });
  }
  handleSubmit(e) {
    let newAppointment = {
      appointmentTitle: this.state.appointmentTitle,
      appointmentDate: this.state.appointmentDate,
      appointmentTime: this.state.appointmentTime
    }
    e.preventDefault();
    this.props.addAppointment(newAppointment);
  }
  render() {
    return (
      <div>
        <Button bsStyle="primary" onClick={ ()=> this.setState({ open: !this.state.open })}>
          <p><MdAddCircleOutline /> Add Appointment</p>
        </Button>
        <Panel bsStyle='primary' collapsible expanded={this.state.open}>          
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="appointmentTitle">
              <ControlLabel><span>* </span>Appointment Title</ControlLabel>
              <FormControl type="text" placeholder="Appointment Title" value={this.state.appointmentTitle}
              onChange={this.handleTitleChange}/>
            </FormGroup>    
            <p><span>* </span>Date and Time</p>
            <AppointmentFormDatePicker updateDate={this.handleDateChange}/>
            <AppointmentFormTimePicker updateTime={this.handleTimeChange}/>
            <FormGroup controlId="destination">
              <ControlLabel>Destination</ControlLabel>
              <FormControl type="text" placeholder="Destination"/>
            </FormGroup>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Description and Notes</ControlLabel>
              <FormControl componentClass="textarea" placeholder="Description and Notes" />
            </FormGroup>
            <FormGroup controlId="formControlsFile">
              <ControlLabel>Add File</ControlLabel>
              <FormControl type="file" label="Attachments" />
              <HelpBlock>(3mb max file size)</HelpBlock>
            </FormGroup>
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
            <Button type="submit" bsStyle="primary">
              Add Appointment
            </Button> 
          </form>          
        </ Panel>
        
        
      </div>
    );
  }
}

// AppointmentForm.propTypes = {};

export default AppointmentForm;
