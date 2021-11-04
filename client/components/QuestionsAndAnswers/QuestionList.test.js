import React from 'react';
import { render } from '@testing-library/react';
import QuestionList from './QuestionList';
import Data from './dummyData';

it('should render QuestionList Component on the DOM', () => {
  const { getByTestId } = render(<QuestionList questions={Data.questions.results} />);
  expect(getByTestId('questionList')).toBeInTheDocument();
});
