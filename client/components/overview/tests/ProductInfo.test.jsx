import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductInfo from '../ProductInfo';
import id from './testData/testId';

it('should display testid from ProductInfo', () => {
  const { getByTestId } = render(<ProductInfo id={id} />);
  expect(getByTestId('productInfo')).toBeInTheDocument();
});

it('should render the NAME of a product', () => {
  render(<ProductInfo id={id} />);
  const productName = screen.getByText(`${id.name}`);
  expect(productName).toBeInTheDocument();
});

it('should render the CATEGORY of a product', () => {
  render(<ProductInfo id={id} />);
  const productCategory = screen.getByText(`${id.category}`);
  expect(productCategory).toBeInTheDocument();
});

it('should render the PRICE of a product', () => {
  render(<ProductInfo id={id} />);
  const productPrice = screen.getByText(`${id.category}`);
  expect(productPrice).toBeInTheDocument();
});
