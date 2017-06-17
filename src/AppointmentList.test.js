import React from 'react';
import ReactDOM from 'react-dom';
import AppointmentList from './AppointmentList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppointmentList />, div);
});