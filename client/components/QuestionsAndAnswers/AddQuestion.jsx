import React from 'react';
import styled from 'styled-components';

const AddQuestion = () => (
  <Button
    data-testid="addQuestion"
    onClick={() => console.log('clicked?')}
  >
    ADD A QUESTION +
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

export default AddQuestion;
