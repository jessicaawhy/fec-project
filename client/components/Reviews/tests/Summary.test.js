import React from 'react';
import { render, screen } from '@testing-library/react';
import Summary from '../Summary';
import exampleReviewsMeta from '../sampleData/exampleReviewsMeta';

it('should render a summary component', () => {
  const setFilter = jest.fn();

  render(<Summary filter={{}} setFilter={setFilter} meta={exampleReviewsMeta} />);

  expect(screen.getByRole('button', { name: /5 stars/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /4 stars/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /3 stars/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /2 stars/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /1 stars/i })).toBeInTheDocument();
});
