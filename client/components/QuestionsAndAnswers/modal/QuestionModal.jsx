import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import QuestionForm from './QuestionForm';
import { ModalShadow, Modal } from '../styles/Modal.style';

const QuestionModal = ({ setOpen, handleAddQuestion }) => {
  const [newQuestion, setNewQuestion] = useState({
    question_body: '',
    asker_name: '',
    email: '',
    answers: {},
  });

  return (
    ReactDOM.createPortal(
      <>
        <ModalShadow />
        <Modal>
          <QuestionForm
            setNewQuestion={setNewQuestion}
            newQuestion={newQuestion}
            handleAddQuestion={handleAddQuestion}
            setOpen={setOpen}
          />
        </Modal>
      </>,
      document.getElementById('app-modal'),
    )
  );
};

export default QuestionModal;
