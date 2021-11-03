import React from 'react';
import PropTypes from 'prop-types';
import StyleButton from './StyleButton';

const StyleSelector = ({ styles }) => (
  <div data-testid="styleSelector">
    {styles.results.map((style) => (
      <StyleButton style={style} />
    ))}
  </div>
);

export default StyleSelector;

StyleSelector.propTypes = PropTypes.shape({
  products: PropTypes.arrayOf(PropTypes.object),
  styles: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.objectOf(PropTypes.any),
}).isRequired;
