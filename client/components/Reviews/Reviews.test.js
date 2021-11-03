import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Reviews from './Reviews';
import exampleGetReviews from './exampleGetReviews';

const exampleReviews = exampleGetReviews.results;

it('should render a reviews list', () => {
  render(<Reviews reviews={exampleReviews} />);

  const reviews = screen.getByTestId('reviews');
  const reviewsList = screen.getByTestId('reviews-list');
  const reviewsInList = screen.getAllByTestId('review');

  expect(reviews).toBeInTheDocument();
  expect(reviewsList).toBeInTheDocument();
  expect(reviewsInList).toHaveLength(2);
});

it('should display initial UI', () => {
  render(<Reviews reviews={exampleReviews} />);

  expect(screen.getByRole('option', { name: /relevant/i })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: /helpful/i })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: /newest/i })).toBeInTheDocument();

  expect(screen.getByRole('button', { name: /more reviews/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /add a review/i })).toBeInTheDocument();
});
