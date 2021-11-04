import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import StarRating from '../StarRating';

it('should display testid from StarRating', () => {
  const { getByTestId } = render(<StarRating />);
  expect(getByTestId('starRating')).toBeInTheDocument();
});
