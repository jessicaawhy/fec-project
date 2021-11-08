import React from 'react';
import { render } from '@testing-library/react';
import AnswerItem from '../AnswerItem';
import Data from '../dummyData';

it('render answer details for a question correctly', () => {
  const { getByTestId } = render(
    <AnswerItem answer={Object.values(Data.questions.results[1].answers)[0]} />,
  );
  // consider changing the props above after fetch from server
  console.log('from answerItem test', Object.values(Data.questions.results[1].answers)[0]);

  expect(getByTestId('answerContainer')).toBeInTheDocument();
});
