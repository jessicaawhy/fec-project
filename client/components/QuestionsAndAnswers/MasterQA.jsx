import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import AddQuestion from './AddQuestion';
import MoreQuestions from './MoreQuestions';
import QuestionList from './QuestionList';
import SearchQuestion from './SearchQuestion';
import Data from './dummyData';

// component
const MasterQA = () => {
  const sortedQuestions = Data.questions.results.sort(compareFn);

  const [questionsLength, setQuestionsLength] = useState(2);
  const [questions, setQuestions] = useState(sortedQuestions.slice(0, questionsLength));

  const renderMoreQuestions = () => {
    console.log(sortedQuestions[0].question_helpfulness);
    if ((questionsLength + 2) <= sortedQuestions.length) {
      setQuestions(sortedQuestions.slice(0, setQuestionsLength(questionsLength + 2)))
    } else {
      setQuestions(sortedQuestions.slice(0, sortedQuestions.length))
    }
  }

  const updateHelpfulness = (index) => {
    sortedQuestions[index].question_helpfulness++;
    setQuestions(sortedQuestions.slice(0, questionsLength)); // might introduce a bug here
  }

  return (
    <div data-testid='masterQA'>
      <h2>QUESTIONS & ANSWERS</h2>
      <SearchQuestion />
      <QuestionList questions={questions} updateHelpfulness={updateHelpfulness}/>
      <Btn>
        {(questionsLength !== sortedQuestions.length &&
         sortedQuestions.length !== 1 && sortedQuestions.length !== 0) &&
        <MoreQuestions renderMoreQuestions={renderMoreQuestions}/>}
        <AddQuestion />
      </Btn>
    </div>
  );
};

const compareFn = (a, b) => {
  return b.question_helpfulness - a.question_helpfulness;
};

// style
const Btn = styled.div`
  display: flex;
`;

export default MasterQA;
