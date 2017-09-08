/**
* This app keeps track of appointments, gives directions, tells
* the user when they have to leave and gives directions
*/
import React, { Component } from 'react';
import './App.css';
import AppointmentForm from './AppointmentForm';
import SearchForm from './SearchForm';
import AppointmentList from './AppointmentList';
import axios from 'axios';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      appointments: [],
      filteredAppointments: []
    };
    this.loadAppointments = this.loadAppointments.bind(this);
    this.updateAppointments = this.updateAppointments.bind(this);
    this.filterAppoinments = this.filterAppoinments.bind(this);
  }

  // Get the appointmens from mongoDB
  loadAppointments() {
    axios.get('/api/appointments')
    .then(response => {
      console.log(response.data)
      // Add appointments to the app state
      this.setState({ 
        appointments: response.data,
        filteredAppointments: response.data
       });
    }).catch(error => {
      console.log(error);
    })
  }

  // Make sure viewport starts at the top
  componentDidMount () {
    window.scrollTo(0, 0);
    this.loadAppointments();
  }

  // Add a new appointment
  updateAppointments(newAppointment) {
    var newAppointmentList = [...this.state.appointments];
    newAppointmentList.push(newAppointment);
    // Sort appointments to show the soonest first
    newAppointmentList.sort((a,b) => {
        return new Date(a.appointmentDate) - new Date(b.appointmentDate);
      });
    // Update state
    this.setState({
      appointments: newAppointmentList,
      filteredAppointments: newAppointmentList      
    }); 
    // Update mongoDB    
    axios.post('/api/appointments', {
      appointmentTitle: newAppointment.appointmentTitle,
      appointmentDate: newAppointment.appointmentDate,
      appointmentTime: newAppointment.appointmentTime,
      appointmentDestination: newAppointment.appointmentDestination,
      appointmentDescription: newAppointment.appointmentDescription,
      appointmentOrigin: newAppointment.appointmentOrigin,
      travelMode: newAppointment.travelMode
    })
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });  
  }

  // This only shows appointments that contain characters entered
  // the search bar
  filterAppoinments(input) {
    let filtered = this.state.appointments.filter(appointment => {
      return JSON.stringify(appointment).includes(input);
    });    
    this.setState({
      filteredAppointments: filtered
    })
  }

  render() {
    return (
      <div className="App">
        <AppointmentForm 
          addAppointment = {this.updateAppointments} />
        <SearchForm 
          filterAppoinments = {this.filterAppoinments}
          filteredAppointments = {this.state.filteredAppointments} />
        <AppointmentList 
          appointments = {this.state.filteredAppointments} />     
      </div>
    );
  }
}

export default App;
