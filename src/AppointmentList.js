import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Appointment from './Appointment';

class AppointmentList extends Component {
  render() {
  return (
    <section id="appointmentList">
      {this.props.appointments.map((appointment, i) => {
        return (
          <Appointment 
            appointmentData={appointment}
            key={i}
            id={i} />
        )
      })}
    </section>
  )
  }
}

AppointmentList.propTypes = {
  appointments: PropTypes.array
}
export default AppointmentList;