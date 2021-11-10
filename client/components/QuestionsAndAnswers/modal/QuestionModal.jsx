import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import QuestionForm from './QuestionForm';
import { useProduct } from '../../../ProductContext';
import { ModalShadow, Modal } from '../styles/Modal.style';

const QuestionModal = ({ setOpen, handleAddQuestion }) => {
  const currProduct = useProduct();
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
          <h3>
            Ask Your Question
          </h3>
          <h5>
            {`About the ${currProduct.name}`}
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
