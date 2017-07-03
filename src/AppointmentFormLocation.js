import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete from 'react-places-autocomplete';

class AppointmentFormLocation extends Component {
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
      className: 'autoComplete'
    }
    return(
      <PlacesAutocomplete 
        inputProps={inputProps} />
    )
  }
}

AppointmentFormLocation.PropTypes = {
  address: PropTypes.string,
  placeholder: PropTypes.string
}

export default AppointmentFormLocation;