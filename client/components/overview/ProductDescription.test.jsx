/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductDescription from './ProductDescription';

it('should display testid from Product Description', () => {
  const { getByTestId } = render(<ProductDescription />);
  expect(getByTestId('productDescription')).toBeInTheDocument();
});
