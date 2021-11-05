import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './styles/StyleSelector.style';

const StyleButton = ({ photo }) => (
  <ButtonStyle
    type="image"
    name="style-button"
    src={photo.thumbnail_url}
    alt="style"
  />
);

export default StyleButton;

StyleButton.propTypes = PropTypes.shape({
  photo: PropTypes.objectOf(PropTypes.any),
}).isRequired;
