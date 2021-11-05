import React, { useState } from 'react';
import styled from 'styled-components';
import { QuestionModal } from './ModalForm';

const AddQuestion = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        data-testid="addQuestion"
        onClick={() => setOpen(true)}
      >
        ADD A QUESTION +
      </Button>
      {open && (<QuestionModal setOpen={setOpen} />)}
    </div>
  );
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

export default AddQuestion;
