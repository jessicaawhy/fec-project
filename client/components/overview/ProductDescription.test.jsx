/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductDescription from './ProductDescription';

it('should display text from Overview Container', () => {
  const { getByTestId } = render(<ProductDescription />);
  expect(getByTestId('productDescription')).toBeInTheDocument();
});
