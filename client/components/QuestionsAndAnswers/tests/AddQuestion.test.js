import React from 'react';
import { render, screen } from '@testing-library/react';
import AddQuestion from '../AddQuestion';

it('should render add a question + button correctly', () => {
  const { getByTestId } = render(<AddQuestion />);
  expect(getByTestId('addQuestion')).toBeInTheDocument();
});

it('should display initial AddQuestion UI', () => {
  render(<AddQuestion />);
  expect(screen.getByRole('button', { name: /ADD A QUESTION +/ })).toBeInTheDocument();
});
