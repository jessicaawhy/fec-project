import React from 'react';
import PropTypes from 'prop-types';
import AnswerItem from './AnswerItem';

const AnswerList = ({ answers }) => {
  const sortedAnswers = Object.values(answers).sort((a, b) => {
    return b.helpfulness - a.helpfulness;
  })

  return(
    <div data-testid='answerList'>
      {sortedAnswers.map((answer) => (
        <AnswerItem answer={answer} key={answer.id} />
      ))}
    </div>
  )
};

AnswerList.propTypes = {
  answers: PropTypes.isRequired,
};

export default AnswerList;
