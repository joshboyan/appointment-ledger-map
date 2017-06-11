import React, { Component } from 'react';
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
    this.props.updateDate(date.format('MMMM Do YYYY'));
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

export default AppointmentFormDatePicker;