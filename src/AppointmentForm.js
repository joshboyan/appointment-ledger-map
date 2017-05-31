import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { Button, Panel, FormGroup, ControlLabel,
         FormControl, HelpBlock, Radio, Checkbox } from 'react-bootstrap';
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import './AppointmentForm.css';

const format = 'h:mm a';

const now = moment().hour(0).minute(0);

function onChange(value) {
  console.log(value && value.format(format));
}

class AppointmentForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      open: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }  

  render() {
    const style = {
      width: '100%'
    }
    function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      );
    }
    return (
      <div>
        <Button bsStyle="primary" style={style} onClick={ ()=> this.setState({ open: !this.state.open })}>
          <p><MdAddCircleOutline /> Add Appointment</p>
        </Button>
        <Panel bsStyle='primary' collapsible expanded={this.state.open}>
          
          <form>
            <FieldGroup
              id="formControlsText"
              type="text"
              label="Appointment Title"
              placeholder="Appointment Title"
            />
            <p>Date and Time</p>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
            <TimePicker
              showSecond={false}
              defaultValue={now}
              className="xxx"
              onChange={onChange}
              format={format}
              use12Hours
            />
            <FieldGroup
              id="formControlsText"
              type="text"
              label="Location"
              placeholder="Location"
            />
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Description and Notes</ControlLabel>
              <FormControl componentClass="textarea" placeholder="Description and Notes" />
            </FormGroup>
            <FieldGroup
              id="formControlsFile"
              type="file"
              label="Attachments"
              help="(3mb max file size)"
            />
            <Panel header="Directions" bsStyle="danger">
              <FieldGroup
              id="formControlsText"
              type="text"
              label="Starting Location"
              placeholder="Starting Location"
            />
            <FormGroup>
                <p>I will travel by:</p>
              <Radio inline>
                    Personal Vehicle
                  </Radio>
                  {' '}
                  <Radio inline>
                    Public Transit
                  </Radio>
                  {' '}
                  <Radio inline>
                    Bike
                  </Radio>
                  {' '}
                  <Radio inline>
                    Foot
                  </Radio>
              </FormGroup >
            </Panel>
            <Panel header="Notifications" bsStyle="danger">
              <FormGroup>
                <p>Notify Me:</p>
              <Checkbox inline>
                    30 minutes
                  </Checkbox>
                  {' '}
                  <Checkbox inline>
                    1 hour
                  </Checkbox>
                  {' '}
                  <Checkbox inline>
                    2 hours
                  </Checkbox>
                  {' '}
                  <Checkbox inline>
                    3 hours
                  </Checkbox>
                  {' '}<Checkbox inline>
                    24 hours
                  </Checkbox>
                  <p>Before my Appointment</p>
              </FormGroup>
            </ Panel> 
          </form>
          
        </ Panel>
        
        
      </div>
    );
  }
}

// AppointmentForm.propTypes = {};

export default AppointmentForm;
