/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductInfo from './ProductInfo';

it('should display testid from ProductInfo', () => {
  const { getByTestId } = render(<ProductInfo />);
  expect(getByTestId('productInfo')).toBeInTheDocument();
});
