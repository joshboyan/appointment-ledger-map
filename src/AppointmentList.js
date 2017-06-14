import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Panel, Row, Col } from 'react-bootstrap';
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
    <section>
      {this.props.appointments.map((appointment, i) => {
        return (
        <div key={i}
             id={i}>
          <Panel 
            bsStyle='info' 
            expanded={true}
            collapsible>
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
              destination={appointment.appointmentDestination} />
            <Button 
              bsStyle="info" 
              onClick={ ()=> this.setState({ open: i })}>   
              Directions         
            </Button>
            <Panel 
            bsStyle='info' 
            expanded={(this.state.open === i)}
            collapsible>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore similique aliquam soluta dicta non consectetur quas suscipit incidunt, vero nihil adipisci optio laudantium rerum quae illum consequuntur explicabo voluptatibus! Ea!</p>
            </Panel>
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