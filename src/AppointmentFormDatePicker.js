import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class AppointmentFormDatePicker extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    console.log(date);
    this.props.updateDate(date);
  }
  render(){
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        className={this.props.errorStatus ? 'error' : null}
      />
    )
  }
}

export default AppointmentFormDatePicker;