import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ModalShadow, Modal } from '../styles/Modal.style';
import AnswerForm from './AnswerForm';

const AnswerModal = ({ question, setIsAdd, handleAddAnswer }) => {
  const [newAnswer, setNewAnswer] = useState({
    body: '',
    answerer_name: '',
    date: '2018-01-04T00:00:00.000Z', // need refactor;
    helpfulness: 333,
    email: '',
    photos: [],
  });
  return (
    ReactDOM.createPortal(
      <>
        <ModalShadow />
        <Modal>
          <h4>
            Submit Your Answer
          </h4>
          <h5>
            [Procut Name Here --- to be added]:
            {question.question_body}
          </h5>
          <AnswerForm
            newAnswer={newAnswer}
            setNewAnswer={setNewAnswer}
            handleAddAnswer={handleAddAnswer}
            setIsAdd={setIsAdd}
          />
        </Modal>
      </>,
      document.getElementById('app-modal'),
    )
  );
};

export default AnswerModal;
