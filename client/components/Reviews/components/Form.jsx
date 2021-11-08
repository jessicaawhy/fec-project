import React, { useState } from 'react';
import { useProduct } from '../../../ProductContext';

import {
  StarRating, Recommend, Name, Email, Summary, Body, Characteristics,
} from './FormFields';
import Button from '../../styles/Button.styled';
import StyledForm from '../styles/Form.styled';
import { submitForm } from '../helpers/helpers';

const ReviewsForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const current = useProduct();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: add error handling for pre & post submit
    const data = {
      product_id: current.id,
      rating: Number(e.target.rating.value),
      summary: e.target.summary.value,
      body: e.target.body.value,
      recommend: e.target.recommend.value === true,
      name: e.target.name.value,
      email: e.target.email.value,
      characteristics: {
        14: Number(e.target.size.value),
        15: Number(e.target.width.value),
        16: Number(e.target.comfort.value),
        17: Number(e.target.quality.value),
        18: Number(e.target.length.value),
        19: Number(e.target.fit.value),
      },
      // TODO: add photo feature
      photos: [],
    };

    const result = await submitForm(data);
    setSubmitted(result);
  };

  return (submitted
    ? <div>Submitted!</div>
    : (
      <StyledForm onSubmit={handleSubmit}>

        <StarRating />
        <Name />
        <Email />
        <Summary />
        <Body />
        <Recommend />

        <Characteristics
          name="size"
          mainLabel="Size"
          elements={[
            'A size too small',
            '1/2 a size too small',
            'Perfect',
            '1/2 a size too big',
            'A size too big',
          ]}
        />

        <Characteristics
          name="width"
          mainLabel="Width"
          elements={[
            'Too narrow',
            'Slightly narrow',
            'Perfect',
            'Slightly wide',
            'Too wide',
          ]}
        />

        <Characteristics
          name="comfort"
          mainLabel="Comfort"
          elements={[
            'Uncomfortable',
            'Slightly uncomfortable',
            'Ok',
            'Comfortable',
            'Perfect',
          ]}
        />

        <Characteristics
          name="quality"
          mainLabel="Quality"
          elements={[
            'Poor',
            'Below Average',
            'Expected',
            'Pretty Great',
            'Perfect',
          ]}
        />

        <Characteristics
          name="length"
          mainLabel="Length"
          elements={[
            'Runs short',
            'Runs slightly short',
            'Perfect',
            'Runs slightly long',
            'Runs long',
          ]}
        />

        <Characteristics
          name="fit"
          mainLabel="Fit"
          elements={[
            'Runs tight',
            'Runs slightly tight',
            'Perfect',
            'Runs slightly loose',
            'Runs loose',
          ]}
        />

        {/* TODO: Upload your photos */}

        <Button type="submit">Submit</Button>
      </StyledForm>
    ));
};

export default ReviewsForm;
