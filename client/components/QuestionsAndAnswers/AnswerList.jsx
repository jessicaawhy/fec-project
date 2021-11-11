import React from 'react';
import PropTypes from 'prop-types';
import AnswerItem from './AnswerItem';
import { AnswersContainer } from './styles/Lists.style';

const AnswerList = ({ questionID, answers, updateAnswerHelpfulness }) => (
  <AnswersContainer data-testid="answerList">
    {answers.map((answer, index) => (
      <AnswerItem
        questionID={questionID}
        answer={answer}
        key={answer.id}
        index={index}
        updateAnswerHelpfulness={updateAnswerHelpfulness}
      />
    ))}
  </AnswersContainer>
);

AnswerList.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateAnswerHelpfulness: PropTypes.func.isRequired,
};

export default AnswerList;
