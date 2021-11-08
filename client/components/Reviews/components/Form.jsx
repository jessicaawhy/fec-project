import React from 'react';
import { useProduct } from '../../../ProductContext';

import {
  StarRating, Recommend, Name, Email, Summary, Body, Characteristics,
} from './FormFields';
import Button from '../../styles/Button.styled';
import StyledForm from '../styles/Form.styled';
import { submitForm } from '../helpers/helpers';

const ReviewsForm = () => {
  const current = useProduct();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      product_id: current.id,
      rating: Number(e.target.rating.value),
      summary: e.target.summary.value,
      body: e.target.body.value,
      recommend: e.target.recommend.value === true,
      name: e.target.name.value,
      email: e.target.email.value,
      characteristics: {
        size: Number(e.target.size.value),
        width: Number(e.target.width.value),
        comfort: Number(e.target.comfort.value),
        quality: Number(e.target.quality.value),
        length: Number(e.target.length.value),
        fit: Number(e.target.fit.value),
      },
      // add photo feature
    };

    submitForm(data);
  };

  return (
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

  );
};

export default ReviewsForm;
