import React, { useEffect } from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import StyleButton from './StyleButton';
import { StyleSelectorContainer } from './styles/StyleSelector.style';

const StyleSelector = ({ productStyles, currentStyle, setCurrentStyle }) => {
  useEffect(async () => {
    map(productStyles, (style) => {
      if (style.default) {
        setCurrentStyle(style);
      }
    });
  }, [productStyles, currentStyle]);

  return (
    <StyleSelectorContainer
      data-testid="style-selector"
      className="style-selector"
    >
      {map(currentStyle.photos, (photo) => {
        const styleId = currentStyle.style_id;
        return (
          <StyleButton
            styleId={styleId}
            photo={photo}
            currentStyle={currentStyle}
            setCurrentStyle={setCurrentStyle}

          />
        );
      })}
    </StyleSelectorContainer>
  );
};

export default StyleSelector;
StyleSelector.propTypes = PropTypes.shape({
  products: PropTypes.arrayOf(PropTypes.object),
  styles: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.objectOf(PropTypes.any),
}).isRequired;
