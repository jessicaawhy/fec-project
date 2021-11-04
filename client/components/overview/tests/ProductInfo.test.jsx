import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductInfo from '../ProductInfo';
import id from './testData/testId';

it('should display testid from ProductInfo', () => {
  const { getByTestId } = render(<ProductInfo />);
  expect(getByTestId('productInfo')).toBeInTheDocument();
});

it('should render the NAME of a product', () => {
  render(<ProductInfo />);
  // how to render dynamic data here for the name?
  const productName = screen.getByText(`${id.name}`);
  expect(productName).toBeInTheDocument();
});

it('should render the CATEGORY of a product', () => {
  render(<ProductInfo />);
  // how to render dynamic data here for the category?
  const productCategory = screen.getByText(`${id.category}`);
  expect(productCategory).toBeInTheDocument();
});

it('should render the PRICE of a product', () => {
  render(<ProductInfo />);
  // how to render dynamic data here for the price?
  const productPrice = screen.getByText(`${id.category}`);
  expect(productPrice).toBeInTheDocument();
});
