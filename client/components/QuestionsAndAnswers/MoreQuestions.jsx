import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
// style
const Button = styled.button`
  padding: 25px;
  font-size: 1em;
  color: black;
  border: 2px solid black;
  margin: 5px;
  cursor: pointer;
`;

export default MoreQuestions;
