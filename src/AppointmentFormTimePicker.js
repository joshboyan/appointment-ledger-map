import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';

const format = 'h:mm a';
const now = moment().hour(0).minute(0);

class AppointmentFormTimePicker extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    console.log(value && value.format(format));
    this.props.updateTime(value.format(format))
  }
  render() {
    return (
      <TimePicker
        showSecond={false}
        defaultValue={now}
        onChange={this.handleChange}
        format={format}
        use12Hours        
        className={this.props.errorStatus ? 'error' : null}
      />
    )
  }
}

export default AppointmentFormTimePicker;
