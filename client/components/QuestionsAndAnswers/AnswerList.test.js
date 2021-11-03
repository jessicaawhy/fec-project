import React from 'react';
import { render, screen } from '@testing-library/react';
import AnswerList from './AnswerList';
import Data from './dummyData';

it("should render the AnswerList component correctly", () => {
  const { getByTestId } = render (<AnswerList answers={Data.questions.results[0].answers}/>);
  expect(getByTestId('answerList')).toBeInTheDocument;
})