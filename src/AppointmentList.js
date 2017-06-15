import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import AppointmentMap from './AppointmentMap.js'

class AppointmentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
  }
  render() {
  return (
    <section id="appointmentList">
      {this.props.appointments.map((appointment, i) => {
        return (
        <div key={i}
             id={i}>
            <h3>{appointment.appointmentTitle}</h3>
            <hr />
              <Row>
                <Col xs={6}>
                  {appointment.appointmentDate}
                </Col>
                <Col xs={6}>
                  {appointment.appointmentTime}
                </Col>
              </Row>
            <p>{appointment.appointmentDestination}</p>
            <p>{appointment.appointmentDescription}</p>
            <AppointmentMap 
              destination={appointment.appointmentDestination}
              origin={appointment.appointmentOrigin}
              travelMode={appointment.travelMode} />
        </div>
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