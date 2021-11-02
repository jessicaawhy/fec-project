import React from 'react';
import { render, screen } from '@testing-library/react';
import ReviewsList from './ReviewsList';
import exampleGetReviews from './exampleGetReviews';

const exampleReviews = exampleGetReviews.results;

it('should render a reviews list', () => {
  render(<ReviewsList reviews={exampleReviews} />);

  const reviewsList = screen.getByTestId('reviews-list');
  const reviewsInList = screen.getAllByTestId('review');

  expect(reviewsList).toBeInTheDocument();
  expect(reviewsInList).toHaveLength(5);
});
