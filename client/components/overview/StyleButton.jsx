import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './styles/StyleSelector.style';

const StyleButton = ({
  styleId, photo, currentStyle, setCurrentStyle,
}) => {
  const [styleSelected, setStyleSelected] = useState(false);

  const handleClick = () => {
    // console.log('StyleButton handleClick running....');
    setStyleSelected(!styleSelected);
    if (currentStyle.styleId !== styleId) {
      setCurrentStyle(styleId);
    }
  };

  return (
    <ButtonStyle
      data-testid="style-button"
      className="style-button"
      type="image"
      styleId={styleId}
      src={photo.thumbnail_url}
      alt={`style-${styleId}`}
      onClick={handleClick}
    />
  );
};

export default StyleButton;

StyleButton.propTypes = PropTypes.shape({
  photo: PropTypes.objectOf(PropTypes.any),
}).isRequired;
