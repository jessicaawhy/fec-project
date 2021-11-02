/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import StarRating from './StarRating';

it('should display text from Overview Container', () => {
  const { getByTestId } = render(<StarRating />);
  expect(getByTestId('starRating')).toBeInTheDocument();
});
