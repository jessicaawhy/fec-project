import React from 'react';
import { render, screen } from '@testing-library/react';
import QuestionItem from '../QuestionItem';
import Data from '../dummyData';

it('should render QuestionItem component correctly', () => {
  const { getByTestId } = render(<QuestionItem question={Data.questions.results[0]} />);
  expect(getByTestId('questionItem')).toBeInTheDocument();
});

describe('should display initial UI for different input types', () => {
  const testingData = {
    question_id: 533212,
    question_body: 'Does this product run big or small?',
    question_date: '2019-01-17T00:00:00.000Z',
    asker_name: 'jbilas',
    question_helpfulness: 8,
    reported: false,
    answers: {},
  };

  it('renders helpful button', () => {
    render(<QuestionItem question={testingData} />);

    const helpfulButton = screen.getByRole('button', { name: /yes/i });
    expect(helpfulButton).toBeInTheDocument();
  });
});
