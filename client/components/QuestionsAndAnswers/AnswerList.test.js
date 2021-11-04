import React from 'react';
import { render } from '@testing-library/react';
import AnswerList from './AnswerList';
import Data from './dummyData';

it('should render the AnswerList component correctly', () => {
  const { getByTestId } = render(
    <AnswerList answers={Object.values(Data.questions.results[1].answers)} />,
  );
  console.log('from answerlist test', Data.questions.results[1].answers);
  expect(getByTestId('answerList')).toBeInTheDocument();
});
