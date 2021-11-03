import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnswerList from './AnswerList';

const QuestionItem = ({ question, index, updateHelpfulness }) => (
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
    <AnswerList answers={question.answers} />
    {Object.keys(question.answers).length !== 0 && <h6> LOAD MORE ANSWERS</h6>}
  </div>
);

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

// const QuestionBody = styled.h4`

// `;

export default QuestionItem;
