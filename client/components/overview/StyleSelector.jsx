import React, { useEffect } from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import StyleButton from './StyleButton';
import { StyleSelectorContainer } from './styles/StyleSelector.style';

const StyleSelector = ({ productStyles, currentStyle, setCurrentStyle }) => {
  useEffect(() => {
    map(productStyles, (style) => {
      if (style.default) {
        setCurrentStyle(style);
      }
    });
  }, [productStyles, currentStyle]);

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
    <StyleSelectorContainer
      data-testid="style-selector"
      className="style-selector"
    >
      {(productStyles)
      && renderStyleButtons()}
    </StyleSelectorContainer>
  );
};

export default StyleSelector;
StyleSelector.propTypes = PropTypes.shape({
  products: PropTypes.arrayOf(PropTypes.object),
  styles: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.objectOf(PropTypes.any),
}).isRequired;
