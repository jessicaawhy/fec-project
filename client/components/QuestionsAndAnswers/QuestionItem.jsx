import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnswerList from './AnswerList';

const QuestionItem = ({ question, index, updateHelpfulness }) => {
  const sortedAnswers = Object.values(question.answers).sort((a, b) => {
    return b.helpfulness - a.helpfulness;
  });
  const [length, setLength] = useState(2);
  const [displayedAnswers, setDisplayedAnswers] = useState(sortedAnswers.slice(0, length));

  const loadMoreAnswers = () => {
    if ((length + 2) <= sortedAnswers.length) {
      setDisplayedAnswers(sortedAnswers.slice(0, setLength(length + 2)))
    } else {
      setDisplayedAnswers(sortedAnswers.slice(0, sortedAnswers.length))
    }
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
        <UnderLine onClick={() => {updateHelpfulness(index)}}>
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
      <AnswerList answers={Object.values(displayedAnswers)} />
      {sortedAnswers.length !== 0 && <LoadMore onClick={loadMoreAnswers}> LOAD MORE ANSWERS</LoadMore>}
    </div>
  )
};

QuestionItem.propTypes = {
  question: PropTypes.isRequired,
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
