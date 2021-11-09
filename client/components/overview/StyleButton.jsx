import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './styles/StyleSelector.style';

const StyleButton = ({ styleId, photo }) => (
  <ButtonStyle
    data-testid="style-button"
    className="style-button"
    type="image"
    styleId={styleId}
    src={photo.thumbnail_url}
    alt="style"
  />
);

export default StyleButton;

StyleButton.propTypes = PropTypes.shape({
  photo: PropTypes.objectOf(PropTypes.any),
}).isRequired;
