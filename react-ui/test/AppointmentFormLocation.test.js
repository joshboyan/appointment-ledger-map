import React from 'react';
import ReactDOM from 'react-dom';
import AppointmentFormLocation from './AppointmentFormLocation';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<AppointmentFormLocation />);
});