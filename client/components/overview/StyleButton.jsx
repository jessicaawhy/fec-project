import React from 'react';
import PropTypes from 'prop-types';

const StyleButton = ({ style }) => (
  <input type="image" name="style-button" src={style.photos.thumbnail_url} border="Specfiy Image Border " alt="style" />
);

export default StyleButton;

StyleButton.propTypes = PropTypes.shape({
  style: PropTypes.objectOf(PropTypes.any),
}).isRequired;
