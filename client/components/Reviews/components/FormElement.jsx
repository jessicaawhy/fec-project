/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

const FormElement = ({
  name, type, label, value, min, max, req,
}) => {
  let elem;

  if (type === 'text') {
    if (req === 0) {
      elem = <input name={name} type={type} maxLength={max || ''} />;
    } else {
      elem = <input name={name} type={type} minLength={min || ''} maxLength={max || ''} required />;
    }
  }

  if (type === 'radio') {
    elem = <input name={name} type={type} defaultValue={value} value={value} required />;
  }

  if (type === 'email') {
    elem = <input name={name} type={type} required />;
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
  value: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  req: PropTypes.number.isRequired,
};
