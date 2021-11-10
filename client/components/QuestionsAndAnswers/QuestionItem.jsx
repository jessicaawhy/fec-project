import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  QuestionDiv, QuestionBody, QuestionMisc, UnderLine, LoadMore,
} from './styles/QuestionItem.style';
import AnswerList from './AnswerList';
import AnswerModal from './modal/AnswerModal';
import { postAnswer, updQuestionHelpfulness, getQuestions } from './helpers/helpers';
import { useProduct } from '../../ProductContext';

const QuestionItem = ({
  question, index, updateHelpfulness,
}) => {
  const sortedAnswers = Object.values(question.answers).sort(
    (a, b) => b.helpfulness - a.helpfulness,
  );
  const [isAdd, setIsAdd] = useState(false);
  const [isHelpful, setIsHelpful] = useState(false);
  const [length, setLength] = useState(2);
  const [displayedAnswers, setDisplayedAnswers] = useState(sortedAnswers.slice(0, length));
  const currProduct = useProduct();

  // useEffect(() => {
  //   setDisplayedAnswers(sortedAnswers.slice(0, setLength(sortedAnswers.length)));
  // }, [question]);

  const loadMoreAnswers = (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText === 'COLLAPSE ANSWERS') {
      setDisplayedAnswers(sortedAnswers.slice(0, 2));
    } else if (e.target.innerText === 'LOAD MORE ANSWERS') {
      setDisplayedAnswers(sortedAnswers.slice(0, setLength(sortedAnswers.length)));
    }
  };

  const handleQuestionHelpfulness = async () => {
    if (!isHelpful) {
      const response = await updQuestionHelpfulness(question.question_id);
      updateHelpfulness(index);
      if (response) {
        setIsHelpful(true);
        getQuestions(currProduct.id, 1, 11);
      }
    }
  };

  const updateAnswerHelpfulness = (currAnswer) => {
    sortedAnswers[currAnswer].helpfulness++;
    setDisplayedAnswers(sortedAnswers.slice(0, length));
  };

  const handleAddAnswer = (newAnswer) => {
    postAnswer(newAnswer, question.question_id);
    setDisplayedAnswers(sortedAnswers.slice(0, length));
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
        questionID={question.question_id}
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
    question_id: PropTypes.number,
    question_helpfulness: PropTypes.number,
    answers: PropTypes.shape({}),
  }).isRequired,
  index: PropTypes.number.isRequired,
  updateHelpfulness: PropTypes.func.isRequired,
};

export default QuestionItem;
