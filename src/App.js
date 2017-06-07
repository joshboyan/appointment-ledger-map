import React, { Component } from 'react';
import './App.css';
import AppointmentForm from './AppointmentForm';


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      appointments: []
    };
  }

  addAppointment(newAppointment) {
    let newAppointmentList = this.state.appointments;
    newAppointmentList.push(newAppointment);
    this.setState= {
      appointments: newAppointmentList
    };
  }

  render() {
    return (
      <div className="App">
        <AppointmentForm />
        
      </div>
    );
  }
}

export default App;
