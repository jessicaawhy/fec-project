import React from 'react';
import PropTypes from 'prop-types';
import QuestionItem from './QuestionItem';
import { QuestionsContainer } from './styles/Lists.style';

const QuestionList = ({ questions, updateHelpfulness }) => (
  <QuestionsContainer data-testid="questionList">
    {questions.map((question, index) => (
      <QuestionItem
        question={question}
        key={question.question_id}
        index={index}
        updateHelpfulness={updateHelpfulness}
      />
    ))}
  </QuestionsContainer>
);

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateHelpfulness: PropTypes.func.isRequired,
};

export default QuestionList;
