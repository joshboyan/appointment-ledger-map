import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import PlacesAutocomplete from 'react-places-autocomplete'

class AppointmentFormDestination extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      address: '' 
    }
    this.onChange = this.onChange.bind(this);  
  }
  onChange(address) {
    this.setState({ address });
    this.props.updateDestination(address);
  } 

  render() {
    const inputProps = {
      value: this.state.address,
      placeholder: 'Destination',
      onChange: this.onChange,
    }
    return(
      <PlacesAutocomplete 
        inputProps={inputProps} />
    )
  }
}

export default AppointmentFormDestination;