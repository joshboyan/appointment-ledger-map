import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';

const format = 'h:mm a';

const now = moment().hour(0).minute(0);

function onChange(value) {
  console.log(value && value.format(format));
}
class AppointmentFormTimePicker extends Component {
  render() {
    return (
      <TimePicker
        showSecond={false}
        defaultValue={now}
        className="xxx"
        onChange={onChange}
        format={format}
        use12Hours
      />
    )
  }
}

export default AppointmentFormTimePicker;
