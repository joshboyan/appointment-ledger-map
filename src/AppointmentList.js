import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Panel, Row, Col } from 'react-bootstrap';

class AppointmentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  render() {
  return(
    <section>
      {this.props.appointments.map((appointment, i) => {
        return (
        <div key={i}
             id={i}>
          <Button 
            bsStyle="info" 
            onClick={ ()=> this.setState({ open: i })}>
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
          </Button>
          <Panel 
            bsStyle='info' 
            expanded={(this.state.open === i)}
            collapsible>
            <p>{appointment.appointmentDestination}</p>
            <p>{appointment.appointmentDescription}</p>
          </Panel>
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