import React, { Component } from 'react';
import './App.css';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      appointments: [
        {
          appointmentTitle: 'first appointment',
          appointmentDate: '2/22/16',
          appointmentTime: '1:00pm',
          appointmentDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla placeat rerum accusamus, obcaecati eum? Ea porro vel laborum molestias harum perspiciatis tempora, voluptas facilis in facere, nemo ab, possimus vitae.',
          appointmentDestination: '2940 Hoo Doo Loop Oldtown, ID',
          appointmentOrigin: '2001 NE 80th Ave Portland, OR',
          travelMode: 'DRIVING'
        },
        {
          appointmentTitle: 'second appointment',
          appointmentDate: '3/2/16',
          appointmentTime: '4:00pm',
          appointmentDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla placeat rerum accusamus, obcaecati eum? Ea porro vel laborum molestias harum perspiciatis tempora, voluptas facilis in facere, nemo ab, possimus vitae.',
          appointmentDestination: '2001 NE 80th Ave Portland, OR 97213',
          appointmentOrigin: 'Imperial Beach San Diego, CA',
          travelMode: 'DRIVING'
        },
        {
          appointmentTitle: 'third appointment',
          appointmentDate: '4/26/16',
          appointmentTime: '7:00pm',
          appointmentDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla placeat rerum accusamus, obcaecati eum? Ea porro vel laborum molestias harum perspiciatis tempora, voluptas facilis in facere, nemo ab, possimus vitae.',
          appointmentDestination: '80 Beach Ave Manahawkin, NJ 08050',
          appointmentOrigin: 'Rock Island, IL',
          travelMode: 'DRIVING'
        }
      ]
    };
    this.updateAppointments = this.updateAppointments.bind(this);
  }

  updateAppointments(newAppointment) {
    var newAppointmentList = [...this.state.appointments];
    newAppointmentList.push(newAppointment);
    newAppointmentList.sort((a,b) => {
        return new Date(a.appointmentDate) - new Date(b.appointmentDate);
      });
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
        <AppointmentList appointments = {this.state.appointments} />     
      </div>
    );
  }
}

export default App;
