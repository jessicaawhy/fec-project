import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnswerList from './AnswerList';
import { AnswerModal } from './ModalForm';

const QuestionItem = ({ question, index, updateHelpfulness }) => {
  const sortedAnswers = Object.values(question.answers).sort(
    (a, b) => b.helpfulness - a.helpfulness,
  );
  const [isAdd, setIsAdd] = useState(false);
  const [isHelpful, setIsHelpful] = useState(false);
  const [length, setLength] = useState(2);
  const [displayedAnswers, setDisplayedAnswers] = useState(sortedAnswers.slice(0, length));

  const loadMoreAnswers = (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText === 'COLLAPSE ANSWERS') {
      setDisplayedAnswers(sortedAnswers.slice(0, 2));
    } else if (e.target.innerText === 'LOAD MORE ANSWERS') {
      setDisplayedAnswers(sortedAnswers.slice(0, setLength(sortedAnswers.length)));
    }
  };

  const handleQuestionHelpfulness = () => {
    if (!isHelpful) {
      setIsHelpful(true);
      updateHelpfulness(index);
    }
  };

  const updateAnswerHelpfulness = (currAnswer) => {
    sortedAnswers[currAnswer].helpfulness++;
    setDisplayedAnswers(sortedAnswers.slice(0, length));
  };

  const handleAddAnswer = (newAnswer) => {
    console.log(1);
    console.log('cool');
    const randomId = Math.floor(Math.random() * 389457934);
    const temp = { ...question.answers, randomId: newAnswer };
    const temp1 = Object.values(temp).sort(
      (a, b) => b.helpfulness - a.helpfulness,
    );
    setDisplayedAnswers(temp1.slice(0, length));
  };

  return (
    <div>
      <QuestionDiv data-testid="questionItem">
        <QuestionBody>
          Q:
        </QuestionBody>
        <QuestionBody>
          {question.question_body}
        </QuestionBody>
        <QuestionMisc>
          Helpful?
        </QuestionMisc>
        <UnderLine onClick={handleQuestionHelpfulness}>
          Yes
        </UnderLine>
        <QuestionMisc>
          (
          {question.question_helpfulness}
          )
        </QuestionMisc>
        <QuestionMisc>
          |
        </QuestionMisc>
        <UnderLine
          onClick={() => setIsAdd(true)}
        >
          Add Answer
        </UnderLine>
        {isAdd
        && (
        <AnswerModal
          question={question}
          setIsAdd={setIsAdd}
          handleAddAnswer={handleAddAnswer}
        />
        )}
      </QuestionDiv>
      <AnswerList
        answers={Object.values(displayedAnswers)}
        updateAnswerHelpfulness={updateAnswerHelpfulness}
      />
      {
        sortedAnswers.length > 2
        && (
        <LoadMore onClick={loadMoreAnswers}>
          {displayedAnswers.length < sortedAnswers.length ? 'LOAD MORE ANSWERS' : 'COLLAPSE ANSWERS'}
        </LoadMore>
        )
      }
    </div>
  );
};

QuestionItem.propTypes = {
  question: PropTypes.shape({
    question_body: PropTypes.string,
    question_helpfulness: PropTypes.number,
    answers: PropTypes.shape({}),
  }).isRequired,
  index: PropTypes.number.isRequired,
  updateHelpfulness: PropTypes.func.isRequired,
};

// style
const QuestionDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const QuestionBody = styled.h4`
  padding: 2px;
`;
const QuestionMisc = styled.h6`
  padding: 2px;
`;
const UnderLine = styled.button`
  text-decoration: underline;
  cursor: pointer;
  border: 0;
  background-color: inherit;
`;

const LoadMore = styled.button`
  cursor: pointer;
  border: 0;
  padding: 8px;
  background-color: inherit;
  font-weight: bold;
`;
// const QuestionBody = styled.h4`

// `;

export default QuestionItem;
