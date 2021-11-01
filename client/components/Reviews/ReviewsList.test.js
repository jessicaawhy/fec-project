import React from 'react';
import { render, screen } from '@testing-library/react';
import ReviewsList from './ReviewsList';
import exampleReviews from './exampleReviews';

it('should display initial UI', () => {
  render(<ReviewsList reviews={exampleReviews} />);

  const reviewsList = screen.getByTestId('reviews-list');
  const reviewsInList = screen.getAllByTestId('review');

  expect(reviewsList).toBeInTheDocument();
  expect(reviewsInList).toHaveLength(5);
});
