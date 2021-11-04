import React from 'react';
import PropTypes from 'prop-types';
import { Container, PhotoContainer } from './styles/StyledModal.styled';

const Modal = ({ currentImg, setShowModal }) => {
  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <PhotoContainer>
        <button onClick={handleClick} type="button">x</button>
        <img
          src={currentImg}
          alt="customer uploaded"
        />
      </PhotoContainer>
    </Container>
  );
};

export default Modal;

Modal.propTypes = {
  currentImg: PropTypes.string.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
