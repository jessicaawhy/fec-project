import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnswerList from './AnswerList';

const QuestionItem = ({ question, index, updateHelpfulness }) => {
  const sortedAnswers = Object.values(question.answers).sort((a, b) => {
    return b.helpfulness - a.helpfulness;
  });
  const [isHelpful, setIsHelpful] = useState(false);
  const [length, setLength] = useState(2);
  const [displayedAnswers, setDisplayedAnswers] = useState(sortedAnswers.slice(0, length));

  const loadMoreAnswers = (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText === 'COLLAPSE ANSWERS') {
      setDisplayedAnswers(sortedAnswers.slice(0, 2))
    } else if (e.target.innerText === 'LOAD MORE ANSWERS') {
      setDisplayedAnswers(sortedAnswers.slice(0, sortedAnswers.length))
    }
  }

  const handleQuestionHelpfulness = () => {
    if (!isHelpful) {
      setIsHelpful(true);
      updateHelpfulness(index);
    }
  }

  const updateAnswerHelpfulness = (index) => {
    sortedAnswers[index].helpfulness++;
    setDisplayedAnswers(sortedAnswers.slice(0, length));
  }

  return (
    <div>
      <QuestionDiv data-testid='questionItem'>
        <h4>
          Q: {' '}
          {question.question_body}
        </h4>
        <h6>
          Helpful?
        </h6>
        <UnderLine onClick={handleQuestionHelpfulness}>
          Yes
        </UnderLine>
        <h6>
          ({question.question_helpfulness})
        </h6>
        <h6>
          |
        </h6>
        <UnderLine onClick={() => console.log('wanna add an answer?')}>
          Add Answer
        </UnderLine>
      </QuestionDiv>
      <AnswerList
        answers={Object.values(displayedAnswers)}
        updateAnswerHelpfulness={updateAnswerHelpfulness}
      />
      {
        sortedAnswers.length > 2 &&
        <LoadMore onClick={loadMoreAnswers}>
          {displayedAnswers.length < sortedAnswers.length ? 'LOAD MORE ANSWERS' : 'COLLAPSE ANSWERS'}
        </LoadMore>
      }
    </div>
  )
};

QuestionItem.propTypes = {
  // question: PropTypes.arrayOf(PropTypes.object).isRequired,
  question: PropTypes.any.isRequired,
  index: PropTypes.number,
  answers: PropTypes.any.isRequired
  // updateHelpfulness: PropTypes.func
};

// style
const QuestionDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  textDecorationLine: underline;
`;

const UnderLine = styled.h6`
  text-decoration: underline;
  cursor: pointer;
`;

const LoadMore = styled.h5`
  cursor: pointer;
`;
// const QuestionBody = styled.h4`

// `;

export default QuestionItem;
