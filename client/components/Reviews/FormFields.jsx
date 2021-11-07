/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledStarRating,
  StyledRecommend,
  StyledName,
  StyledEmail,
  StyledBody,
  StyledCharacteristics,
} from './styles/FormField.styled';
import FormElement from './FormElement';

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
    <StyledStarRating>
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
      name="nickname"
      type="text"
      label="Nickname"
    />
  </StyledName>
);

/* EMAIL */

export const Email = () => (
  <StyledEmail>
    <FormElement
      name="email"
      type="text"
      label="Email"
    />
  </StyledEmail>
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

/* CHARACTERISTICS */

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
