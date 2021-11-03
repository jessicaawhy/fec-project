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

  // var questionsLength = 2;
  const [questionsLength, setQuestionsLength] = useState(2);
  const [questions, setQuestions] = useState(sortedQuestions.slice(0, questionsLength));

  // const renderMoreQuestions = () => {
  //   questionsLength += 2;
  //   if (questionsLength  <= sortedQuestions.length) {
  //     setQuestions(sortedQuestions.slice(0, questionsLength))
  //   } else {
  //     setQuestions(sortedQuestions.slice(0, sortedQuestions.length))
  //   }
  // }
  const renderMoreQuestions = () => {
    if ((questionsLength + 2) <= sortedQuestions.length) {
      setQuestions(sortedQuestions.slice(0, setQuestionsLength(questionsLength + 2)))
    } else {
      setQuestions(sortedQuestions.slice(0, sortedQuestions.length))
    }
  }

  return (
    <div data-testid='masterQA'>
      <h2>QUESTIONS & ANSWERS</h2>
      <SearchQuestion />
      <QuestionList questions={questions} />
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

// {questionsLength !== sortedQuestions.length && <Button
//   data-testid='MoreQuestions'
//   onClick={ renderMoreQuestions }
// >
//   MORE ANSWERED QUESTIONS
// </Button>}
// const Button = styled.button`
//   padding: 25px;
//   font-size: 1em;
//   color: black;
//   border: 2px solid black;
//   margin: 5px;
//   cursor: pointer;
// `;