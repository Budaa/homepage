import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <input
        style={{ width: 400, fontSize: 15 }}
        type="text"
        name="lname"
        value={value}
        onChange={onChange}
      />
    );
  }
}

TextInput.propTypes = {
  value: PropTypes.string,
};

export default TextInput;
