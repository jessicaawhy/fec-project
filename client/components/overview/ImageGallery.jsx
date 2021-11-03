import React from 'react';
import PropTypes from 'prop-types';

const ImageGallery = ({ styles }) => (
  <div data-testid="imageGallery">
    {styles.results.map((style) => (
      <img src={style.photos.url} alt="imageGallery" />
    ))}
  </div>
);

export default ImageGallery;

ImageGallery.propTypes = PropTypes.shape({
  products: PropTypes.arrayOf(PropTypes.object),
  styles: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.objectOf(PropTypes.any),
}).isRequired;
