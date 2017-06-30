import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class AppointmentFormDatePicker extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    console.log(date);
    this.props.updateDate(date.format('MM-DD-YYYY'));
    this.setState({
      date: date
    });
  }
  render(){
    return (
      <DatePicker
        selected={this.state.date}
        onChange={this.handleChange}
        className={this.props.errorStatus ? 'error' : null}
        value={this.state.date}
      />
    )
  }
}

AppointmentFormDatePicker.PropTypes = {
  updateDate: PropTypes.func,
  errorStatus: PropTypes.string
}

export default AppointmentFormDatePicker;