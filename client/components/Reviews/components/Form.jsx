import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useProduct } from '../../../ProductContext';

import {
  StarRating, Recommend, Name, Email, Summary, Body, Characteristics,
} from './FormFields';
import Button from '../../styles/Button.styled';
import StyledForm from '../styles/Form.styled';
import { submitForm } from '../helpers/helpers';
import formChars from '../data/characteristics';

const ReviewsForm = ({ meta }) => {
  const [submitted, setSubmitted] = useState(false);
  const current = useProduct();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const properties = Object.keys(meta.characteristics);
    const characteristics = {};

    for (let i = 0; i < properties.length; i += 1) {
      const property = properties[i];
      const { id } = meta.characteristics[property];
      const { value } = e.target[property.toLowerCase()];

      characteristics[id] = Number(value);
    }

    // TODO: add error handling for pre & post submit
    const data = {
      product_id: current.id,
      rating: Number(e.target.rating.value),
      summary: e.target.summary.value,
      body: e.target.body.value,
      recommend: e.target.recommend.value === true,
      name: e.target.name.value,
      email: e.target.email.value,
      characteristics,
      // TODO: add photo feature
      photos: [],
    };

    const result = await submitForm(data);
    setSubmitted(result);
  };

  return (submitted
    ? (
      <p>Form submitted successfully! Thank you for your feedback! ☺</p>
    )
    : (
      <StyledForm onSubmit={handleSubmit}>
        <StarRating />
        <Name />
        <Email />
        <Summary />
        <Body />
        <Recommend />

        {
          Object.keys(formChars).map((char) => (
            <Characteristics
              name={char}
              mainLabel={char[0].toUpperCase() + char.slice(1)}
              elements={formChars[char]}
            />
          ))
        }

        {/* TODO: Upload your photos */}

        <Button type="submit">Submit</Button>
      </StyledForm>
    ));
};

export default ReviewsForm;

ReviewsForm.propTypes = {
  meta: PropTypes.shape({
    product_id: PropTypes.number,
    ratings: {
      1: PropTypes.number,
      2: PropTypes.number,
      3: PropTypes.number,
      4: PropTypes.number,
      5: PropTypes.number,
    },
    recommended: {
      true: PropTypes.string,
      false: PropTypes.string,
    },
    characteristics: {
      Fit: {
        id: PropTypes.number,
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.null,
        ]),
      },
      Length: {
        id: PropTypes.number,
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.null,
        ]),
      },
      Comfort: {
        id: PropTypes.number,
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.null,
        ]),
      },
      Quality: {
        id: PropTypes.number,
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.null,
        ]),
      },
    },
  }).isRequired,
};
