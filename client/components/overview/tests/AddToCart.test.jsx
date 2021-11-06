import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddToCart from '../AddToCart';
import styles from './testData/testStyles';

it('should render container-div for AddToCart component', () => {
  render(<AddToCart styles={styles} />);

  const cartContainer = screen.getByTestId('cart-container');

  expect(cartContainer).toHaveClass('cart-container');
});

it('should render drop downs for size and quantity', () => {
  render(<AddToCart styles={styles} />);

  const sizeDropDown = screen.getByTestId('size');
  const quantityDropDown = screen.getByTestId('quantity');

  expect(sizeDropDown).toHaveClass('size');
  expect(quantityDropDown).toHaveClass('quantity');
});

it('should render "Add to Cart" button', () => {
  render(<AddToCart styles={styles} />);

  const button = screen.getByTestId('add-to-cart-button');

  expect(button).toHaveClass('add-to-cart-button');
});
