import React from 'react';
import PropTypes from 'prop-types';

const Button = ({label, handleClick}) => {
  return(
    <button onClick={handleClick} >
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
}

Button.defaultProps = {
  label: 'Test Me :D',
}

export default Button;
