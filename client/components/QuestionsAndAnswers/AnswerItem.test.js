import React from 'react';
import { render, screen} from '@testing-library/react';
import AnswerItem from './AnswerItem';
import AnswerList from './AnswerList';
import Data from './dummyData';

it("render answer details for a question correctly", () => {
  const {getByTestId} = render(<AnswerItem answer={Object.values(Data.questions.results[0].answers)[0]}/>);
  // consider changing the props above after fetch from server
  expect(getByTestId('answerContainer')).toBeInTheDocument();
});

