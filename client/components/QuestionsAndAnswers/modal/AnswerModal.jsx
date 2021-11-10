import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AnswerForm from './AnswerForm';
import { useProduct } from '../../../ProductContext';
import { ModalShadow, Modal } from '../styles/Modal.style';

const AnswerModal = ({ question, setIsAdd, handleAddAnswer }) => {
  const currProduct = useProduct();
  console.log('what is currP', currProduct);
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
            {`${currProduct.name}: ${question.question_body}`}
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
