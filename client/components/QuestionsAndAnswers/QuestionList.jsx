import React from 'react';
import PropTypes from 'prop-types';
import QuestionItem from './QuestionItem';

const QuestionList = ({ questions, updateHelpfulness }) => (
  <div data-testid="questionList">
    {console.log('from QuestionList', typeof questions, questions, typeof updateHelpfulness)}
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
  questions: PropTypes.any.isRequired,
  updateHelpfulness: PropTypes.func.isRequired,
};

export default QuestionList;
