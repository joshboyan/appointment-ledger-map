import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import PlacesAutocomplete from 'react-places-autocomplete';

class AppointmentFormDestination extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this);  
  }
  onChange(address) {
    this.props.updateDestination(address);
  } 

  render() {
    const inputProps = {
      value: this.props.address,
      placeholder: this.props.placeholder,
      onChange: this.onChange,
    }
    return(
      <PlacesAutocomplete 
        inputProps={inputProps} />
    )
  }
}

export default AppointmentFormDestination;