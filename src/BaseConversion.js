import React from 'react';

class BaseConversion extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.props.onChange(parseInt(value, this.props.base));
  }

  render() {
    const value = isNaN(this.props.value) ? '' : this.props.value;
    return (
      <label>
        Base of {this.props.base}
        <input
          value={value.toString(this.props.base)}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

export default BaseConversion;
