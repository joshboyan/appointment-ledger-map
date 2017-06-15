import React, { Component } from 'react';
import { Button, Panel, FormGroup, ControlLabel,
         FormControl } from 'react-bootstrap';
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';
import MdHighlightRemove from 'react-icons/lib/md/highlight-remove';
import AppointmentFormDatePicker from './AppointmentFormDatePicker';
import AppointmentFormTimePicker from './AppointmentFormTimePicker';
import AppointmentFormLocation from './AppointmentFormLocation';
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
      appointmentDate: null,
      appointmentTime: null,
      appointmentDestination: '',
      appointmentDescription: '',
      appointmentOrigin: '',
      travelMode: null
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleDestinationChange = this.handleDestinationChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleOriginChange = this.handleOriginChange.bind(this);
    this.handleTravelModeChange = this.handleTravelModeChange.bind(this);
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
  handleOriginChange(address) {
    this.setState({
      appointmentOrigin: address
    });
  }
  handleTravelModeChange(mode) {
    this.setState({
      travelMode: mode
    }, function() {
      console.log(this.state.travelMnullode);
    });
  }
  handleSubmit(e) {
    let newAppointment = {
      appointmentTitle: this.state.appointmentTitle,
      appointmentDate: this.state.appointmentDate,
      appointmentTime: this.state.appointmentTime,
      appointmentDestination: this.state.appointmentDestination,
      appointmentDescription: this.state.appointmentDescription,
      appointmentOrigin: this.state.appointmentOrigin,
      travelMode: this.state.travelMode
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
        open: false,
        formError:{
          title: false,
          date: false,
          time: false
        },
        appointmentTitle: '',
        appointmentDescription: '',
        appointmentDestination: '',
        appointmentDate: '',
        appointmentOrigin: '',
        travelMode: ''
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
              <AppointmentFormLocation
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
            <AppointmentFormDirections
              handleOriginChange={this.handleOriginChange}
              address={this.state.appointmentOrigin}
              travelMode={this.handleTravelModeChange} />
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

export default AppointmentForm;
