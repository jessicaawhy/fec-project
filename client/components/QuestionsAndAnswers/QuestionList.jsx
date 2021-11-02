import React from 'react';
import PropTypes from 'prop-types';
import QuestionItem from './QuestionItem';

const QuestionList = ({ questions }) => (
  <div>
    {questions.map((question) => (
      <QuestionItem question={question} key={question.question_id} />
    ))}
  </div>
);

QuestionList.propTypes = {
  questions: PropTypes.isRequired,
};

export default QuestionList;
