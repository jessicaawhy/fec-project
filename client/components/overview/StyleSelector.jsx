import React from 'react';
import PropTypes from 'prop-types';
import StyleButton from './StyleButton';
import { StyleSelectorContainer } from './styles/StyleSelector.style';

const StyleSelector = ({ styles }) => (
  <StyleSelectorContainer
    data-testid="style-selector"
    className="style-selector"
  >
    {styles.photos.map((photo) => (
      <StyleButton
        photo={photo}
      />
    ))}
  </StyleSelectorContainer>
);

export default StyleSelector;
StyleSelector.propTypes = PropTypes.shape({
  products: PropTypes.arrayOf(PropTypes.object),
  styles: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.objectOf(PropTypes.any),
}).isRequired;
