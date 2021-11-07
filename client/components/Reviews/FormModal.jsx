import React from 'react';
import PropTypes from 'prop-types';
import { StyledFormModal, Container } from './styles/FormModal.styled';
import Form from './Form';

const FormModal = ({ product, setShowModal }) => {
  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <StyledFormModal>
      <Container>
        <button onClick={handleClick} type="button">x</button>
        <div>
          <h2>Write Your Review</h2>
          <h3>{`About the ${product}`}</h3>
          <Form />
        </div>
      </Container>
    </StyledFormModal>
  );
};

export default FormModal;

FormModal.propTypes = {
  product: PropTypes.string.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
