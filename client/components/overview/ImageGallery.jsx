import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import {
  GalleryContainer, GalleryStyle, ImageStyle, ThumbnailContainer, ThumbnailStyle,
}
  from './styles/ImageGallery.style';

const ImageGallery = ({ styles }) => (
  <GalleryContainer className="image-gallery grid-container">
    <ThumbnailContainer className="thumbnail-container">
      {styles.results.map((style) => (
        map(style.photos, (photo) => (
          <div>
            <ThumbnailStyle src={photo.thumbnail_url} alt="thumbnail" />
          </div>
        ))
      ))}
    </ThumbnailContainer>
    <GalleryStyle className="gallery-container">
      {styles.results.map((style) => (
        map(style.photos, (photo) => (
          <div>
            <ImageStyle src={photo.url} alt="fullImage" />
          </div>
        ))
      ))}
    </GalleryStyle>
  </GalleryContainer>
);

export default ImageGallery;
ImageGallery.propTypes = PropTypes.shape({
  products: PropTypes.arrayOf(PropTypes.object),
  styles: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.objectOf(PropTypes.any),
}).isRequired;
