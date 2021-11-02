import React from 'react';
import { render } from '@testing-library/react';
import AddQuestion from './AddQuestion';

it("render add a question + button correctly", () => {
  const {getByTestId} = render(<AddQuestion />);
  expect(getByTestId('addQuestion')).toBeInTheDocument();
})

