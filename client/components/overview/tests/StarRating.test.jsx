import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StarRating from '../StarRating';

it('should display StarRating component', () => {
  render(<StarRating />);

  const starRating = screen.getByTestId('star-rating');

  expect(starRating).toHaveClass('star-rating');
});
