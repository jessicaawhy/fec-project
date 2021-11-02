/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import StyleSelector from './StyleSelector';

it('should display text from Overview Container', () => {
  const { getByTestId } = render(<StyleSelector />);
  expect(getByTestId('styleSelector')).toBeInTheDocument();
});
