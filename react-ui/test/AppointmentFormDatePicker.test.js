import React from 'react';
import ReactDOM from 'react-dom';
import AppointmentFormDatePicker from './AppointmentFormDatePicker';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppointmentFormDatePicker />, div);
});