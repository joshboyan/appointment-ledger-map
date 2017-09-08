import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import AppointmentMap from './AppointmentMap';
import moment from 'moment';
import parseFormat from 'moment-parseformat';

class Appointment extends Component {
   constructor(props) {
    super(props)
    this.state = {
      duration: null
    }
    this.getDuration = this.getDuration.bind(this);
  } 
  getDuration(duration) {
    let dateTime = this.props.appointmentData.appointmentTime + ' ' + this.props.appointmentData.appointmentDate;
    let format = parseFormat(dateTime);
    let arrival = moment(dateTime, format).subtract({'hours': 12, 'seconds': duration}).format(' HH:mm a dddd MMMM D, YYYY');
    this.setState({
      duration,
      arrival
    }, function() {
      console.log(this.state.arrival);      
    });
  }
  render() {
    const { appointmentTitle, appointmentDate, appointmentDescription,
   appointmentDestination, appointmentOrigin, appointmentTime, 
   travelMode } = this.props.appointmentData;
    return (
      <div className='appointment'>
        <h3>{appointmentTitle}</h3>
        <hr />
          <Row>
            <Col xs={6}>
              {appointmentDate}
            </Col>
            <Col xs={6}>
              {appointmentTime}
            </Col>
          </Row>
          <hr />
        <p>{appointmentDestination}</p>
        <p>{appointmentDescription}</p>
        {appointmentOrigin && appointmentDestination ?
        <div>
        <p><strong>Start {travelMode.toLowerCase()} by 
           {this.state.arrival} to arrive on time.</strong></p>
         <AppointmentMap 
          destination={appointmentDestination}
          origin={appointmentOrigin}
          travelMode={travelMode}
          getDuration={this.getDuration} /> 
        </div> : null }
    </div>
    )
  }
}

Appointment.PropTypes ={
  appointmentData: PropTypes.object,
}
export default Appointment;