import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DropdownMenu extends Component {
  render() {
    const { keyName, options } = this.props;
    return (
      <select name={keyName}>
        {options.map(option => <option value={option}>{option}</option>)}
      </select>
    );
  }
}

DropdownMenu.propTypes = {
  options: PropTypes.array,
  keyName: PropTypes.string,
};

export default DropdownMenu;
