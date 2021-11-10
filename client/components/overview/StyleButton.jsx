import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './styles/StyleSelector.style';

const StyleButton = ({
  styleId, photos, currentStyle, setCurrentStyle, productStyles,
}) => {
  const [styleSelected, setStyleSelected] = useState(currentStyle);

  const findStyle = (styleNum) => {
    console.log('findStyle running....', styleNum);
    productStyles.forEach((style) => {
      if (style.style_id === styleNum) {
        setCurrentStyle(style);
        setStyleSelected(style);
      }
    });
  };

  const handleClick = (e, styleNum) => {
    console.log('StyleButton handleClick running....');
    console.log('currentStyle.style_id', currentStyle.style_id, 'style', styleNum);
    findStyle(styleNum);
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
      styleId={styleId}
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
