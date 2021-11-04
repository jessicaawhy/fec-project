import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageGallery from '../ImageGallery';

it('should display testid from ImageGallery', () => {
  const { getByTestId } = render(<ImageGallery />);
  expect(getByTestId('imageGallery')).toBeInTheDocument();
});
