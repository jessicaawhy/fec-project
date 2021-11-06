import React, { useState } from 'react';
import Button from './styles/SharedQA.style';
import { QuestionModal } from './ModalForm';

const AddQuestion = ({ handleAddQuestion }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        data-testid="addQuestion"
        onClick={() => setOpen(true)}
      >
        ADD A QUESTION +
      </Button>
      {open && (<QuestionModal setOpen={setOpen} handleAddQuestion={handleAddQuestion} />)}
    </div>
  );
};

export default AddQuestion;
