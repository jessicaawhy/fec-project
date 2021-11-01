import React from 'react';
import { render, screen } from '@testing-library/react';
import ReviewsListItem from './ReviewsListItem';
import exampleReviews from './exampleReviews';

it('should render a review element', () => {
  render(<ReviewsListItem review={exampleReviews[0]} />);

  expect(screen.getByTestId('review')).toBeInTheDocument();
});

it('should display initial UI', () => {
  render(<ReviewsListItem review={exampleReviews[0]} />);

  expect(screen.getByRole('button', { name: 'Yes' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Report' })).toBeInTheDocument();
});
