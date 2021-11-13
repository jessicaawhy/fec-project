import React from 'react';
import PropTypes from 'prop-types';

import StyleButton from './StyleButton';
import { StyleSelectorContainer, Style } from './styles/StyleSelector.style';

const StyleSelector = ({ productStyles, currentStyle, setCurrentStyle }) => {
  const renderStyleButtons = () => productStyles.map((style) => {
    const styleId = style.style_id;
    const { photos } = style;

    return (
      <StyleButton
        styleId={styleId}
        photos={photos}
        currentStyle={currentStyle}
        setCurrentStyle={setCurrentStyle}
        productStyles={productStyles}
      />
    );
  });

  return (
    <>
      <Style>Style:&nbsp;</Style>
      {currentStyle.name}
      <StyleSelectorContainer
        data-testid="style-selector"
        className="style-selector"
      >

        {(productStyles)
      && renderStyleButtons()}
      </StyleSelectorContainer>
    </>
  );
};

export default StyleSelector;

StyleSelector.propTypes = {
  productStyles: PropTypes.arrayOf(PropTypes.object),
  currentStyle: PropTypes.objectOf(PropTypes.any),
  setCurrentStyle: PropTypes.func,
}.isRequired;
