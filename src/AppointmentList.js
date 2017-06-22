import React from 'react';
import PropTypes from 'prop-types';
import Appointment from './Appointment';

const AppointmentList = ({appointments = []}) => {
  return (
    <section id="appointmentList">
        {appointments.map((appointment, i) => {
        return (
          <Appointment 
            appointmentData={appointment}
            key={appointment['_id']}
            id={i} />
        )
      })}
    </section>
  )
}

AppointmentList.propTypes = {
  appointments: PropTypes.array
}
export default AppointmentList;