import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AnswerItem = ({ answer, index, updateAnswerHelpfulness }) => {
  const [isHelpful, setIsHelpful] = useState(false);

  const handleAnswerHelpfulness = () => {
    console.log('clicked -------');
    if (!isHelpful) {
      setIsHelpful(true);
      updateAnswerHelpfulness(index);
    }
  };

  return (
    <AnswerContainer data-testid="answerContainer">
      <AnswerBody>
        A:
        {' '}
        {answer.body}
        {' '}
      </AnswerBody>
      <AnswerDetails>
        <AnswererName>
          by
          {' '}
          {answer.answerer_name}
          {' '}
        </AnswererName>
        <AnswerDate>
          {new Date(answer.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </AnswerDate>
        <AnswerHelpfulness>
          Helpful?
          {'   '}
        </AnswerHelpfulness>
        <UnderLineYes onClick={handleAnswerHelpfulness}>
          {'   '}
          Yes
          {' '}
        </UnderLineYes>
        <AnswerHelpfulness>
          (
          {answer.helpfulness}
          )
        </AnswerHelpfulness>
        <Divide>
          |
        </Divide>
        <Report onClick={() => console.log('report this answer?')}>
          Report
        </Report>
      </AnswerDetails>
    </AnswerContainer>
  );
};

AnswerItem.propTypes = {
  answer: PropTypes.any.isRequired,
  // answer: PropTypes.arrayOf(PropTypes.object).isRequired
};

// style
const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const AnswerBody = styled.div`
  display: flex;
`;
const AnswerDetails = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const AnswererName = styled.h6`
  flex: 2;
`;
const AnswerDate = styled.h6`
  flex: 3;
`;
const AnswerHelpfulness = styled.h6`
  flex: 1;
`;
const Divide = styled.h6`
  flex: 1;
`;
const UnderLineYes = styled.h6`
  flex: 1;
  text-decoration: underline;
  cursor: pointer;
`;
const Report = styled.h6`
  flex: 33;
  text-decoration: underline;
  cursor: pointer;
`;

export default AnswerItem;
