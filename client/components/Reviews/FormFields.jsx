import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  StyledRecommend, StyledName, StyledEmail, StyledBody, StyledCharacteristics,
} from './styles/FormField.styled';
import FormElement from './FormElement';

export const Recommend = () => (
  <StyledRecommend>
    <legend>Do you recommend this product?</legend>

    <div>
      <FormElement
        name="recommend"
        type="radio"
        label="Yes"
        value="true"
      />

      <FormElement
        name="recommend"
        type="radio"
        label="No"
        value="false"
      />
    </div>
  </StyledRecommend>
);

export const Name = () => (
  <StyledName>
    <FormElement
      name="nickname"
      type="text"
      label="Nickname"
    />
  </StyledName>
);

export const Email = () => (
  <StyledEmail>
    <FormElement
      name="email"
      type="text"
      label="Email"
    />
  </StyledEmail>
);

export const Body = () => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const current = e.target.value;

    if (current.length < 50) {
      setMessage(`Minimum required characters left: [${50 - current.length}]`);
    } else {
      setMessage('Minimum reached!');
    }
  };

  return (
    <StyledBody>
      <label htmlFor="body">
        Review
        <textarea
          name="body"
          rows="5"
          onKeyPress={(e) => {
            if (e.key === 'Enter') { e.preventDefault(); }
          }}
          onChange={handleChange}
        />
        <p>{message}</p>
      </label>
    </StyledBody>
  );
};

// Characteristics

export const Characteristics = ({ name, mainLabel, elements }) => (
  <StyledCharacteristics>
    <legend>{mainLabel}</legend>

    <div>
      <FormElement
        name={name}
        type="radio"
        label={elements[0]}
        value="1"
      />

      <FormElement
        name={name}
        type="radio"
        label={elements[1]}
        value="2"
      />

      <FormElement
        name={name}
        type="radio"
        label={elements[2]}
        value="3"
      />

      <FormElement
        name={name}
        type="radio"
        label={elements[3]}
        value="4"
      />

      <FormElement
        name={name}
        type="radio"
        label={elements[4]}
        value="5"
      />
    </div>
  </StyledCharacteristics>
);

Characteristics.propTypes = {
  name: PropTypes.string.isRequired,
  mainLabel: PropTypes.string.isRequired,
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
};
