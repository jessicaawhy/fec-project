/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';

const FormElement = ({
  name, type, label, value, min = '', max = '', req,
}) => {
  let elem;

  if (type === 'text') {
    if (req === 0) {
      elem = <input name={name} type={type} id={name} maxLength={max} />;
    } else {
      elem = <input name={name} type={type} id={name} minLength={min} maxLength={max} required />;
    }
  }

  if (type === 'radio') {
    elem = <input name={name} type={type} id={name} value={value} required />;
  }

  if (type === 'email') {
    elem = <input name={name} type={type} id={name} required />;
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
  value: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  req: PropTypes.number,
};
