import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ModalShadow, Modal } from '../styles/Modal.style';
import QuestionForm from './QuestionForm';

const QuestionModal = ({ setOpen, handleAddQuestion }) => {
  const [newQuestion, setNewQuestion] = useState({
    question_body: '',
    asker_name: '',
    question_helpfulness: 66666,
    email: '',
    answers: {},
  });

  return (
    ReactDOM.createPortal(
      <>
        <ModalShadow />
        <Modal>
          <h4>
            Ask Your Question
          </h4>
          <h5>
            About the [Product Name Here]
          </h5>
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
