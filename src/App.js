import React, { Component } from 'react';
import './App.css';
import AppointmentForm from './AppointmentForm';


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      appointments: []
    };
    this.updateAppointments = this.updateAppointments.bind(this);
  }

  updateAppointments(newAppointment) {
    var newAppointmentList = [...this.state.appointments];
    newAppointmentList.push(newAppointment);
    this.setState({
      appointments: newAppointmentList        
    }, function() {
      console.log(this.state.appointments);
    });    
  }

  render() {
    return (
      <div className="App">
        <AppointmentForm addAppointment = {this.updateAppointments} />        
      </div>
    );
  }
}

export default App;
