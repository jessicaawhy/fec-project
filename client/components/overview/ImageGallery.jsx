import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import {
  GalleryContainer, GalleryStyle, ImageStyle, ThumbnailContainer, ThumbnailStyle, RightArrow,
  LeftArrow, UpArrow, DownArrow, RightArrowStyle,
  LeftArrowStyle, UpArrowStyle, DownArrowStyle,
}
  from './styles/ImageGallery.style';

const ImageGallery = ({ styles }) => (
  <GalleryContainer className="image-gallery grid-container">
    <ThumbnailContainer className="thumbnail-container">
      <UpArrowStyle>
        <UpArrow className="up-arrow" />
      </UpArrowStyle>
      {styles.results.map((style) => (
        map(style.photos, (photo) => (
          <div>
            <ThumbnailStyle src={photo.thumbnail_url} alt="thumbnail" />
          </div>
        ))
      ))}
      <DownArrowStyle>
        <DownArrow className="down-arrow" />
      </DownArrowStyle>
    </ThumbnailContainer>
    <GalleryStyle className="gallery-container">
      <RightArrowStyle>
        <RightArrow className="right-arrow" />
      </RightArrowStyle>
      {styles.results.map((style) => (
        map(style.photos, (photo) => (
          <div>
            <ImageStyle src={photo.url} alt="fullImage" />
          </div>
        ))
      ))}
      <LeftArrowStyle>
        <LeftArrow className="left-arrow" />
      </LeftArrowStyle>
    </GalleryStyle>
  </GalleryContainer>
);

export default ImageGallery;
ImageGallery.propTypes = PropTypes.shape({
  products: PropTypes.arrayOf(PropTypes.object),
  styles: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.objectOf(PropTypes.any),
}).isRequired;
