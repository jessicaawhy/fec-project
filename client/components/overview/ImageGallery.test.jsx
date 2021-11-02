/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageGallery from './ImageGallery';
// import userEvent from '@testing-library/user-event';

it('should display text from Overview Container', () => {
  const { getByTestId } = render(<ImageGallery />);
  expect(getByTestId('imageGallery')).toBeInTheDocument();
});
