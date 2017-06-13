import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Button, Panel, FormGroup, ControlLabel,
         FormControl, HelpBlock } from 'react-bootstrap';
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';
import MdHighlightRemove from 'react-icons/lib/md/highlight-remove';
import AppointmentFormDatePicker from './AppointmentFormDatePicker';
import AppointmentFormTimePicker from './AppointmentFormTimePicker';
import AppointmentFormDestination from './AppointmentFormDestination';
import AppointmentFormDirections from './AppointmentFormDirections';
import './AppointmentForm.css';

class AppointmentForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      formError: {
        title: false,
        date: false,
        time: false
      },
      appointmentTitle: '',
      appointmentDate: '',
      appointmentTime: '',
      appointmentDestination:'',
      appointmentDescription: '',
      appointmentStart: ''
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleDestinationChange = this.handleDestinationChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  
  handleDestinationChange(address) {
    this.setState({
      appointmentDestination: address
    });
  }

  handleDescriptionChange(e) {
    this.setState({
      appointmentDescription: e.target.value
    });
  }
  handleStartChange(address) {
    this.setState({
      appointmentStart: address
    });
  }

  handleSubmit(e) {
    let newAppointment = {
      appointmentTitle: this.state.appointmentTitle,
      appointmentDate: this.state.appointmentDate,
      appointmentTime: this.state.appointmentTime,
      appointmentDestination: this.state.appointmentDestination,
      appointmentDescription: this.state.appointmentDescription,
      appointmentStart: this.state.appointmentStart
    }
    e.preventDefault();
    if (newAppointment.appointmentTitle === '') {
      this.setState({
        formError:{
          title: true,
          date: false,
          time: false
        }
      }, function() {
        alert('You must enter a title to create an appointment');
      });
    } else if (newAppointment.appointmentDate === '') {
      this.setState({
        formError:{
          title: false,
          date: true,
          time: false
        }
      }, function() {        
        alert('You must enter a date to create an appointment');
      });
    } else if (newAppointment.appointmentTime === '') {
      this.setState({
        formError:{
          title: false,
          date: false,
          time: true
        }
      }, function() {
        alert('You must enter a time to create an appointment');
      });
    } else {
      this.setState({
        formError:{
          title: false,
          date: false,
          time: false
        },
        appointmentTitle: '',
        appointmentDescription: '',
        appointmentDestination: '',
        appointmentDate: ''
      }, function() {
        this.props.addAppointment(newAppointment);
      });
    }
  }

  render() {
    return (
      <div>
        <Button 
          bsStyle="primary" 
          onClick={ ()=> this.setState({ open: !this.state.open })}>
          <p>{this.state.open ?
            <MdHighlightRemove /> :
            <MdAddCircleOutline />} Add Appointment</p>
        </Button>
        <Panel 
          bsStyle='primary' 
          expanded={this.state.open}
          collapsible>          
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="appointmentTitle">
              <ControlLabel>
                <span>* </span>Appointment Title
              </ControlLabel>
              <FormControl 
                type="text" 
                placeholder="Appointment Title"
                value={this.state.appointmentTitle}
                onChange={this.handleTitleChange}
                className={this.state.formError.title ? 'error' : null} />
            </FormGroup>    
            <p><span>* </span>Date and Time</p>
            <AppointmentFormDatePicker 
              updateDate={this.handleDateChange}
              errorStatus={this.state.formError.date} />
            <AppointmentFormTimePicker 
              updateTime={this.handleTimeChange}
              errorStatus={this.state.formError.time} />
            <FormGroup controlId="destination">
            <ControlLabel>Destination</ControlLabel>
              <AppointmentFormDestination 
                updateDestination={this.handleDestinationChange}
                address={this.state.appointmentDestination}
                placeholder='Destination' />
            </FormGroup>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Description and Notes</ControlLabel>
              <FormControl 
                componentClass="textarea" 
                placeholder="Description and Notes" 
                value={this.state.appointmentDescription}
                onChange={this.handleDescriptionChange} />
            </FormGroup>
            <FormGroup controlId="formControlsFile">
              <ControlLabel>Add File</ControlLabel>
              <FormControl 
                type="file" 
                label="Attachments" />
              <HelpBlock>(3mb max file size)</HelpBlock>
            </FormGroup>
            <AppointmentFormDirections 
              handleStartChange={this.handleStartChange}
              address={this.state.appointmentStart} />
            <Button 
              type="submit" 
              bsStyle="primary">
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
