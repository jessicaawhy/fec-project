import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './styles/StyleSelector.style';

const StyleButton = ({
  styleId, photos, currentStyle, setCurrentStyle, productStyles,
}) => {
  const [styleSelected, setStyleSelected] = useState(currentStyle);

  const handleClick = (e, styleNum) => {
    productStyles.forEach((style) => {
      if (style.style_id === styleNum) {
        setCurrentStyle(style);
      }
    });
  };

  useEffect(() => {
    setStyleSelected(currentStyle);
  }, [currentStyle]);

  return (
    (productStyles.length > 1)
    && (
    <ButtonStyle
      data-testid="style-button"
      className="style-button"
      type="image"
      styleId={styleSelected.style_id}
      src={photos[0].thumbnail_url}
      alt={`style-${styleId}`}
      onClick={(e) => { handleClick(e, styleId); }}
    />
    )
  );
};

export default StyleButton;

StyleButton.propTypes = PropTypes.shape({
  photo: PropTypes.objectOf(PropTypes.any),
}).isRequired;
