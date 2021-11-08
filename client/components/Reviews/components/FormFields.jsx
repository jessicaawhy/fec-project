/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FormElement from './FormElement';
import {
  StyledStarRating,
  StyledRecommend,
  StyledName,
  StyledEmail,
  StyledSummary,
  StyledBody,
  StyledCharacteristics,
} from '../styles/FormFields.styled';

/* STAR RATING */

const StarRatingElement = ({
  num, selected, setSelected, filled, setFilled,
}) => (
  <label
    htmlFor="rating"
    onMouseEnter={() => { setFilled(num); }}
    onMouseLeave={() => { setFilled(selected); }}
    onClick={(e) => {
      setSelected(num);
      setFilled(num);
      e.target.querySelector('input').checked = true;
    }}
  >
    {filled >= num ? '★' : '☆' }
    <input
      name="rating"
      type="radio"
      value={num}
      required
    />
  </label>
);

StarRatingElement.propTypes = {
  num: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
  setSelected: PropTypes.func.isRequired,
  filled: PropTypes.number.isRequired,
  setFilled: PropTypes.func.isRequired,
};

export const StarRating = () => {
  const [selected, setSelected] = useState(0);
  const [filled, setFilled] = useState(0);

  return (
    <StyledStarRating htmlFor="rating">
      <legend>Rating</legend>

      <div>
        {
          [1, 2, 3, 4, 5].map((num) => (
            <StarRatingElement
              key={num}
              num={num}
              selected={selected}
              setSelected={setSelected}
              filled={filled}
              setFilled={setFilled}
            />
          ))
        }
      </div>
    </StyledStarRating>
  );
};

/* RECOMMEND */

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

/* NAME */

export const Name = () => (
  <StyledName>
    <FormElement
      name="name"
      type="text"
      label="Name"
      min={1}
      max={60}
      req={1}
    />
  </StyledName>
);

/* EMAIL */

export const Email = () => (
  <StyledEmail>
    <FormElement
      name="email"
      type="email"
      label="Email"
    />
  </StyledEmail>
);

export const Summary = () => (
  <StyledSummary>
    <FormElement
      name="summary"
      type="text"
      label="Summary"
      min={1}
      max={60}
      req={0}
    />
  </StyledSummary>
);

/* BODY */

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
          min={50}
          max={1000}
          onKeyPress={(e) => {
            if (e.key === 'Enter') { e.preventDefault(); }
          }}
          onChange={handleChange}
          required
        />
        <p>{message}</p>
      </label>
    </StyledBody>
  );
};

/* CHARACTERISTICS */

export const Characteristics = ({ name, mainLabel, elements }) => (
  <StyledCharacteristics required>
    <legend>{mainLabel}</legend>

    <div>
      {
        [1, 2, 3, 4, 5].map((curr) => (
          <FormElement
            name={name}
            type="radio"
            label={elements[curr - 1]}
            value={curr}
          />
        ))
      }
    </div>
  </StyledCharacteristics>
);

Characteristics.propTypes = {
  name: PropTypes.string.isRequired,
  mainLabel: PropTypes.string.isRequired,
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
};
