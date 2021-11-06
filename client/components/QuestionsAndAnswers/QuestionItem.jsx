import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  QuestionDiv, QuestionBody, QuestionMisc, UnderLine, LoadMore,
} from './styles/QuestionItem.style';
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
          <span>Helpful? </span>
          <UnderLine type="button" onClick={handleQuestionHelpfulness}>Yes</UnderLine>
          <span>{`(${question.question_helpfulness})`}</span>
          <UnderLine onClick={() => setIsAdd(true)}> Add Answer </UnderLine>
        </QuestionMisc>
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

export default QuestionItem;
