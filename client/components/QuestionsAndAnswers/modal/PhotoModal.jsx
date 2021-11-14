import React from 'react';
import ReactDOM from 'react-dom';
import {
  ModalShadow, PicModal, PopupImg,
} from '../styles/Modal.style';

const PhotoModal = ({ currPhoto, setShowPhtoModal }) => (
  ReactDOM.createPortal(
    <>
      <ModalShadow />
      <PicModal>
        <PopupImg
          src={currPhoto}
          alt="Answerer's Images"
          onClick={() => setShowPhtoModal(false)}
        />
      </PicModal>
    </>,
    document.getElementById('app-modal'),
  )
);
export default PhotoModal;
