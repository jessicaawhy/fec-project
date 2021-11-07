import React from 'react';
import PropTypes from 'prop-types';
import Button from './styles/SharedQA.style';

const MoreQuestions = ({ renderMoreQuestions }) => (
  <Button
    data-testid="MoreQuestions"
    onClick={renderMoreQuestions}
  >
    MORE ANSWERED QUESTIONS
  </Button>
);

MoreQuestions.propTypes = {
  renderMoreQuestions: PropTypes.func.isRequired,
};

export default MoreQuestions;
