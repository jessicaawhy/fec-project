import React from 'react';
import PropTypes from 'prop-types';
import QuestionItem from './QuestionItem';

const QuestionList = ({ questions, updateHelpfulness }) => (
  <div data-testid="questionList">
    {questions.map((question, index) => (
      <QuestionItem
        question={question}
        key={question.question_id}
        index={index}
        updateHelpfulness={updateHelpfulness}
      />
    ))}
  </div>
);

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateHelpfulness: PropTypes.func.isRequired,
};

export default QuestionList;
