import React from 'react';
import PropTypes from 'prop-types';
import AnswerItem from './AnswerItem';

const AnswerList = ({ questionID, answers, updateAnswerHelpfulness }) => (
  <div data-testid="answerList">
    {console.log('from answerList Component', answers)}
    {answers.map((answer, index) => (
      <AnswerItem
        questionID={questionID}
        answer={answer}
        key={answer.id}
        index={index}
        updateAnswerHelpfulness={updateAnswerHelpfulness}
      />
    ))}
  </div>
);

AnswerList.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateAnswerHelpfulness: PropTypes.func.isRequired,
};

export default AnswerList;
// const sortedAnswers = Object.values(answers).sort((a, b) => {
//   return b.helpfulness - a.helpfulness;
// });
// const [length, setLength] = useState(2);
// const [displayedAnswers, setDisplayedAnswers] = useState(sortedAnswers.slice(0, 2));
