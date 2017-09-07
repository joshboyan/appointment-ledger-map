import React from 'react';
import ReactDOM from 'react-dom';
import Appointment from './Appointment';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  const data = {
          appointmentTitle: 'first appointment',
          appointmentDate: '2/22/16',
          appointmentTime: '1:00pm',
          appointmentDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla placeat rerum accusamus, obcaecati eum? Ea porro vel laborum molestias harum perspiciatis tempora, voluptas facilis in facere, nemo ab, possimus vitae.',
          appointmentDestination: '2940 Hoo Doo Loop Oldtown, ID',
          appointmentOrigin: '2001 NE 80th Ave Portland, OR',
          travelMode: 'DRIVING'
        }
  shallow(<Appointment appointmentData ={data} />);
});