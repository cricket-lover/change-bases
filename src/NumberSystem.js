import React from 'react';
import BaseConversion from './BaseConversion';

class NumberSystem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.bases = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    const children = this.bases.map((base) => (
      <BaseConversion
        key={base}
        base={base}
        value={this.state.value}
        onChange={this.handleChange}
      />
    ));
    return <div style={{ margin: 'auto', width: '250px' }}>{children}</div>;
  }
}

export default NumberSystem;
