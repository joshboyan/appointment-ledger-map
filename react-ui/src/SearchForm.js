import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel,
         FormControl } from 'react-bootstrap';
import MdSearch from 'react-icons/lib/md/search';

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    };
    this.getValidationState = this.getValidationState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getValidationState() {
    const length = this.props.filteredAppointments.length;
    if (length > 1) return 'success';
    else if (length > 0) return 'warning';
    else  return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.props.filterAppoinments(e.target.value);
  }

  render() {
    return (
      <form className="search">
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel><MdSearch /> Seach Appointments</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Search Appointments"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
}

SearchForm.PropTypes = {
  filterAppoinments: PropTypes.func,
  filteredAppointments: PropTypes.array
};

export default SearchForm;