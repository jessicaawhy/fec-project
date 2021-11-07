import React from 'react';

import {
  StarRating, Recommend, Name, Email, Body, Characteristics,
} from './FormFields';
import Button from '../../styles/Button.styled';
import StyledForm from '../styles/Form.styled';

const ReviewsForm = () => {
  const handleClick = (e) => {
    e.preventDefault();
    // console.log(e.target.rating.value);
    // console.log(e.target.nickname.value);
    // console.log(e.target.email.value);
    // console.log(e.target.body.value);
    // console.log(e.target.recommend.value);
    // console.log(e.target.size.value);
    // console.log(e.target.width.value);
    // console.log(e.target.comfort.value);
    // console.log(e.target.quality.value);
    // console.log(e.target.length.value);
    // console.log(e.target.fit.value);
  };

  return (
    <StyledForm onSubmit={handleClick}>

      <StarRating />
      <Name />
      <Email />
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
