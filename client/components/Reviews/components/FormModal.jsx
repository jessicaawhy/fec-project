import React from 'react';
import PropTypes from 'prop-types';
import { useProduct } from '../../../ProductContext';

import Form from './Form';
import { StyledFormModal, Container } from '../styles/FormModal.styled';

const FormModal = ({ setShowModal, meta }) => {
  const product = useProduct();

  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <StyledFormModal>
      <Container>
        <button onClick={handleClick} type="button">x</button>
        <div>
          <h2>Write Your Review</h2>
          <h3>{`About the ${product.name}`}</h3>
          <Form meta={meta} />
        </div>
      </Container>
    </StyledFormModal>
  );
};

export default FormModal;

FormModal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};
