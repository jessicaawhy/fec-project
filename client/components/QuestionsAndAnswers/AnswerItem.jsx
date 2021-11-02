import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AnswerItem = ({ answer }) => (
  <AnswerContainer>
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
        {answer.date}
      </AnswerDate>
      <AnswerHelpfulness>
        Helpful?
        {'   '}
      </AnswerHelpfulness>
      <UnderLineYes>
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
      <Report>
        Report
      </Report>
    </AnswerDetails>
  </AnswerContainer>
);

AnswerItem.propTypes = {
  answer: PropTypes.isRequired,
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
