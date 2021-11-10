/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';

const FormElement = ({
  name, type, label, value, placeholder = '', min = '', max = '', req,
}) => {
  let elem;

  const defaultProps = {
    name,
    type,
    id: name,
  };

  if (type === 'text') {
    defaultProps.placeholder = placeholder;
    defaultProps.minLength = min;
    defaultProps.maxLength = max;

    if (req === 0) {
      elem = (
        <input {...defaultProps} />
      );
    } else {
      elem = (
        <input {...defaultProps} required />
      );
    }
  }

  if (type === 'radio') {
    elem = <input {...defaultProps} value={value} required />;
  }

  if (type === 'email') {
    elem = <input {...defaultProps} placeholder={placeholder} required />;
  }

  return (
    <label htmlFor={name}>
      {label}
      {elem}
    </label>
  );
};

export default FormElement;

FormElement.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  req: PropTypes.number,
};
