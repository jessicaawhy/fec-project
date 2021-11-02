import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddToCart from './AddToCart';

it('should display testid from AddToCart', () => {
  const { getByTestId } = render(<AddToCart />);
  expect(getByTestId('addToCart')).toBeInTheDocument();
});
