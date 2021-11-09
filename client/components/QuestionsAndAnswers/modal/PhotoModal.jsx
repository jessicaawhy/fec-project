import React from 'react';
import ReactDOM from 'react-dom';
import { ModalShadow, Modal, PopupImg } from '../styles/Modal.style';

const PhotoModal = ({ currPhoto, handleImgModal }) => (
  ReactDOM.createPortal(
    <>
      {console.log('what is currPhoto', currPhoto)}
      <ModalShadow />
      <Modal>
        <PopupImg
          src={currPhoto}
          alt="Answerer's Images"
          onClick={handleImgModal}
        />
      </Modal>
    </>,
    document.getElementById('app-modal'),
  )
);
export default PhotoModal;
