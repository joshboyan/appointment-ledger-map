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
  loadAppointments() {
    axios.get(this.props.url)
    .then(res => {
      this.setState({ 
        appointments: res.data,
        filteredAppointments: res.data
       });
    })
  }
  componentDidMount () {
    window.scrollTo(0, 0);
    this.loadAppointments();
  }
  updateAppointments(newAppointment) {
    var newAppointmentList = [...this.state.appointments];
    newAppointmentList.push(newAppointment);
    newAppointmentList.sort((a,b) => {
        return new Date(a.appointmentDate) - new Date(b.appointmentDate);
      });
    this.setState({
      appointments: newAppointmentList,
      filteredAppointments: newAppointmentList      
    });    
  }

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
