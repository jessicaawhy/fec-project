import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import StyleSelector from '../StyleSelector';

it('should display testid from StyleSelector', () => {
  const { getByTestId } = render(<StyleSelector />);
  expect(getByTestId('styleSelector')).toBeInTheDocument();
});
