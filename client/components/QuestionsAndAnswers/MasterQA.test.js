import React from 'react';
import { render, screen} from '@testing-library/react';
import MasterQA from './MasterQA';

it("should render MasterQA component correctly", () => {
  const { getByTestId } = render(<MasterQA />);
  expect(getByTestId('masterQA')).toBeInTheDocument();
});

// it('should display initial MasterQA UI', () => {
//   render(<MasterQA />);
//   expect(screen.getByRole('heading', { name: /Questions & Answers/ })).toBeInTheDocument();
// });
