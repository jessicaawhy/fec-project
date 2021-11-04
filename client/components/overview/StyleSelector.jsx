import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import StyleButton from './StyleButton';
import { StyleSelectorContainer } from './styles/StyleSelector.style';

const StyleSelector = ({ styles }) => (
  <StyleSelectorContainer className="style-selector">
    {styles.results.map((style) => (
      map(style.photos, (photo) => (
        <StyleButton photo={photo} />
      ))
    ))}
  </StyleSelectorContainer>
);

export default StyleSelector;
StyleSelector.propTypes = PropTypes.shape({
  products: PropTypes.arrayOf(PropTypes.object),
  styles: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.objectOf(PropTypes.any),
}).isRequired;
