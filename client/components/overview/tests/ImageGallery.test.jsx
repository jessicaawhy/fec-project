import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageGallery from '../ImageGallery';
import styles from './testData/testStyles';

it('should render the gallery and thumbnail containers', () => {
  render(<ImageGallery styles={styles} />);

  const standardImage = screen.getByTestId('gallery-container');
  const thumbnailImage = screen.getByTestId('thumbnail-container');

  expect(standardImage).toHaveClass('gallery-container');
  expect(thumbnailImage).toHaveClass('thumbnail-container');
});

it('should render the up, down, left, and right arrows', () => {
  render(<ImageGallery styles={styles} />);

  const upArrow = screen.getByTestId('up-arrow');
  const downArrow = screen.getByTestId('down-arrow');
  const leftArrow = screen.getByTestId('left-arrow');
  const rightArrow = screen.getByTestId('right-arrow');

  expect(upArrow).toHaveClass('up-arrow');
  expect(downArrow).toHaveClass('down-arrow');
  expect(leftArrow).toHaveClass('left-arrow');
  expect(rightArrow).toHaveClass('right-arrow');
});

/* This test throws an error because multiple elements with the same data-testid was found.
Need to figure out how to allow multiple matches

it('should render full images and thumbnail images', () => {
  render(<ImageGallery styles={styles} />);

  const fullImage = screen.getByTestId('full-image');
  const thumbnailImage = screen.getByTestId('thumbnail-image');

  expect(fullImage).toHaveClass('full-image');
  expect(thumbnailImage).toHaveClass('thumbnail-image');
}); */
