import React from 'react';
import ReactDOM from 'react-dom';
import AppointmentFormDirections from './AppointmentFormDirections';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<AppointmentFormDirections />);
});