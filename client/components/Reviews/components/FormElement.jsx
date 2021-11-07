/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

const FormElement = ({
  name, type, label, value,
}) => {
  const inputElement = type === 'text'
    ? (
      <input
        name={name}
        type={type}
      />
    )
    : (
      <input
        name={name}
        type={type}
        defaultValue={value}
        value={value}
      />
    );

  return (
    <label htmlFor={name}>
      {label}
      {inputElement}
    </label>
  );
};

export default FormElement;

FormElement.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
