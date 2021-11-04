import React, { useState } from 'react';
import styled from 'styled-components';
import AddQuestion from './AddQuestion';
import ModalForm from './ModalForm';
import MoreQuestions from './MoreQuestions';
import QuestionList from './QuestionList';
import SearchQuestion from './SearchQuestion';
import Data from './dummyData';

// component
const compareFn = (a, b) => b.question_helpfulness - a.question_helpfulness;

const MasterQA = () => {
  const sortedQuestions = Data.questions.results.sort(compareFn);

  const [questionsLength, setQuestionsLength] = useState(2);
  const [questions, setQuestions] = useState(sortedQuestions.slice(0, questionsLength));

  const renderMoreQuestions = () => {
    console.log(sortedQuestions[0].question_helpfulness);
    if ((questionsLength + 2) <= sortedQuestions.length) {
      setQuestions(sortedQuestions.slice(0, setQuestionsLength(questionsLength + 2)));
    } else {
      setQuestions(sortedQuestions.slice(0, sortedQuestions.length));
    }
  };

  const updateHelpfulness = (index) => {
    sortedQuestions[index].question_helpfulness++;
    console.log('from masterQA file - updatehelpfulness', sortedQuestions[index], sortedQuestions);
    setQuestions(sortedQuestions.slice(0, questionsLength)); // might introduce a bug here
  };

  const handleSearch = (input) => {
    if (input.length < 3) {
      setQuestions(sortedQuestions.slice(0, questionsLength));
    } else if (input.length >= 3) {
      const matchedQuestions = sortedQuestions.filter((question) => (
        question.question_body.toLowerCase().indexOf(input) !== -1
      ));
      setQuestions(matchedQuestions);
    }
  };

  return (
    <MasterContainer data-testid="masterQA">
      <h2>QUESTIONS & ANSWERS</h2>
      <SearchQuestion handleSearch={handleSearch} />
      <Scroller>
        <QuestionList questions={questions} updateHelpfulness={updateHelpfulness} />
      </Scroller>
      <Btn>
        {(questionsLength !== sortedQuestions.length && sortedQuestions.length >= 2)
        && <MoreQuestions renderMoreQuestions={renderMoreQuestions} />}
        <AddQuestion />
      </Btn>
      <ModalForm />
    </MasterContainer>
  );
};

// style
const MasterContainer = styled.div`
  height: 100px,
  display: flex,
  align-items: center,
  justify-content: center,
`;
const Btn = styled.div`
  display: flex;
`;
const Scroller = styled.div`
  height: 366px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

export default MasterQA;
