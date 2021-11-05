import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StyleSelector from '../StyleSelector';
import StyleButton from '../StyleButton';
import styles from './testData/testStyles';

it('should render StyleSelector component', () => {
  render(<StyleSelector styles={styles} />);

  const container = screen.getByTestId('style-selector');

  expect(container).toHaveClass('style-selector');
});

it('should render StyleButton component', () => {
  render(<StyleButton photo={styles.results[0].photos[0].thumbnail_url} />);

  const button = screen.getByTestId('style-button');

  expect(button).toHaveClass('style-button');
});
