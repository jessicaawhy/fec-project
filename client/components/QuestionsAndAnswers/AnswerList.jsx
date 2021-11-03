import React, { useState }from 'react';
import PropTypes from 'prop-types';
import AnswerItem from './AnswerItem';

const AnswerList = ({ answers }) => {
  const sortedAnswers = Object.values(answers).sort((a, b) => {
    return b.helpfulness - a.helpfulness;
  });
  const [length, setLength] = useState(2);
  const [displayedAnswers, setDisplayedAnswers] = useState(sortedAnswers.slice(0, 2))
  return(
    <div data-testid='answerList'>
      {displayedAnswers.map((answer) => (
        <AnswerItem answer={answer} key={answer.id} />
      ))}
    </div>
  );
};

AnswerList.propTypes = {
  answers: PropTypes.isRequired,
};

export default AnswerList;
