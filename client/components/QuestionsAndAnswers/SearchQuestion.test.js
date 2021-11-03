import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchQuestion from './SearchQuestion';

it("should render a search bar", () => {
  const {getByTestId} = render(<SearchQuestion />);
  expect(getByTestId('searchQuestions')).toBeInTheDocument();
})