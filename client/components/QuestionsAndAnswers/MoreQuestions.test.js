import React from 'react';
import { render, screen } from '@testing-library/react';
import MoreQuestions from './MoreQuestions';

it("render add a question + button correctly", () => {
  const {getByTestId} = render(<MoreQuestions />);
  expect(getByTestId('MoreQuestions')).toBeInTheDocument();
})


it('should display initial MoreQuestions UI', () => {
  render(<MoreQuestions />);
  expect(screen.getByRole('button', { name: /MORE ANSWERED QUESTIONS/ })).toBeInTheDocument();
});