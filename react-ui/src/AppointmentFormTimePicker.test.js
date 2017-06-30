import React from 'react';
import ReactDOM from 'react-dom';
import AppointmentFormTimePicker from './AppointmentFormTimePicker';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<AppointmentFormTimePicker />);
});