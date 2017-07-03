import React from 'react';
import ReactDOM from 'react-dom';
import AppointmentForm from './AppointmentForm';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<AppointmentForm />);
});
