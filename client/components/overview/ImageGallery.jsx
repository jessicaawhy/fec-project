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
  <GalleryContainer
    data-testid="gallery-container"
    className="gallery-container"
  >
    <ThumbnailContainer
      data-testid="thumbnail-container"
      className="thumbnail-container"
    >
      <UpArrowStyle>
        <UpArrow
          data-testid="up-arrow"
          className="up-arrow"
        />
      </UpArrowStyle>
      {styles.results.map((style) => (
        map(style.photos, (photo) => (
          <div>
            <ThumbnailStyle
              data-testid="thumbnail-image"
              className="thumbnail-image"
              alt="thumbnail"
              src={photo.thumbnail_url}
            />
          </div>
        ))
      ))}
      <DownArrowStyle>
        <DownArrow
          data-testid="down-arrow"
          className="down-arrow"
        />
      </DownArrowStyle>
    </ThumbnailContainer>
    <GalleryStyle className="gallery-container">
      <RightArrowStyle>
        <RightArrow
          data-testid="right-arrow"
          className="right-arrow"
        />
      </RightArrowStyle>
      {styles.results.map((style) => (
        map(style.photos, (photo) => (
          <div>
            <ImageStyle
              data-testid="full-image"
              className="full-image"
              alt="full image"
              src={photo.url}
            />
          </div>
        ))
      ))}
      <LeftArrowStyle>
        <LeftArrow
          data-testid="left-arrow"
          className="left-arrow"
        />
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
