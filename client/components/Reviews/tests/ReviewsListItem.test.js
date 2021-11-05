import React from 'react';
import { render, screen } from '@testing-library/react';
import ReviewsListItem from '../ReviewsListItem';
import exampleGetReviews from '../sampleData/exampleGetReviews';

const exampleReviews = exampleGetReviews.results[0];

it('should render a review element', () => {
  render(<ReviewsListItem review={exampleReviews} />);

  expect(screen.getByTestId('review')).toBeInTheDocument();
});

it('should display initial UI', () => {
  render(<ReviewsListItem review={exampleReviews} />);

  expect(screen.getByRole('button', { name: /yes/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /report/i })).toBeInTheDocument();
});
