import React from 'react';
import PropTypes from 'prop-types';
import AnswerItem from './AnswerItem';

const AnswerList = ({ answers }) => (
  <div>
    {Object.values(answers).map((answer) => (
      <AnswerItem answer={answer} key={answer.id} />
    ))}
  </div>
);

AnswerList.propTypes = {
  answers: PropTypes.isRequired,
};

export default AnswerList;
