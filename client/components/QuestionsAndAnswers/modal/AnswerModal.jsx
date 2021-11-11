import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AnswerForm from './AnswerForm';
import {
  ModalShadow, Modal,
} from '../styles/Modal.style';

const AnswerModal = ({ question, setIsAdd, handleAddAnswer }) => {
  const [newAnswer, setNewAnswer] = useState({
    body: '',
    answerer_name: '',
    date: '2018-01-04T00:00:00.000Z',
    helpfulness: 333,
    email: '',
    photos: [],
  });
  return (
    ReactDOM.createPortal(
      <>
        <ModalShadow />
        <Modal>
          <AnswerForm
            question={question}
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
