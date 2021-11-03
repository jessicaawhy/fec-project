import React from 'react';
import styled from 'styled-components';

const MoreQuestions = ({ renderMoreQuestions }) => (
  <Button
    data-testid='MoreQuestions'
    onClick={ renderMoreQuestions }
  >
    MORE ANSWERED QUESTIONS
  </Button>
);

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
