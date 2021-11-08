import React from 'react';
import PropTypes from 'prop-types';

import { Container, PhotoContainer } from '../styles/ReviewsPhotoModal.styled';

const ReviewPhotoModal = ({ currentImg, setShowModal }) => {
  const handleClick = (e) => {
    const { id } = e.target;
    if (id === 'container' || id === 'exit') {
      setShowModal(false);
    }
  };

  return (
    <Container id="container" onClick={handleClick}>
      <PhotoContainer>
        <button onClick={handleClick} type="button" id="exit">x</button>
        <img
          src={currentImg}
          alt="customer uploaded"
        />
      </PhotoContainer>
    </Container>
  );
};

export default ReviewPhotoModal;

ReviewPhotoModal.propTypes = {
  currentImg: PropTypes.string.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
