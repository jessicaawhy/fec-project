import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductDescription from '../ProductDescription';
import id from './testData/testId';

it('should display product slogan, description, and features', () => {
  render(<ProductDescription id={id} />);

  const slogan = screen.getByTestId('slogan');
  const description = screen.getByTestId('description');
  const features = screen.getByTestId('features');

  expect(slogan).toHaveClass('slogan');
  expect(description).toHaveClass('description');
  expect(features).toHaveClass('features');
});
