import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  GalleryContainer, GalleryStyle, ImageStyle, ThumbnailContainer, ThumbnailStyle, RightArrow,
  LeftArrow, UpArrow, DownArrow, RightArrowStyle,
  LeftArrowStyle, UpArrowStyle, DownArrowStyle,
}
  from './styles/ImageGallery.style';

const ImageGallery = ({ currentStyle }) => {
  const [thumbnailPhotos, setThumbnailPhotos] = useState([]);
  const [fullPhotos, setFullPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const createThumbnailPhotoSet = () => {
    const thumbnails = [];
    currentStyle.photos.forEach((photo) => {
      thumbnails.push(photo.thumbnail_url);
    });
    return thumbnails;
  };

  const createFullPhotoSet = () => {
    const fullSizePhotos = [];
    currentStyle.photos.forEach((photo) => {
      fullSizePhotos.push(photo.url);
    });
    return fullSizePhotos;
  };

  useEffect(() => {
    if (currentStyle.photos) {
      setThumbnailPhotos(createThumbnailPhotoSet());
      setFullPhotos(createFullPhotoSet());
    }
  }, [currentStyle]);
  return (
    <GalleryContainer
      data-testid="gallery-container"
      className="gallery-container"
    >
      {(currentStyle.photos !== undefined)
    && (
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
      {currentStyle.photos.map((photoSet) => (
        <div>
          <ThumbnailStyle
            data-testid="thumbnail-image"
            className="thumbnail-image"
            alt="thumbnail"
            src={photoSet.thumbnail_url}
          />
        </div>
      ))}
      <DownArrowStyle>
        <DownArrow
          data-testid="down-arrow"
          className="down-arrow"
        />
      </DownArrowStyle>
    </ThumbnailContainer>
    )}
      {(currentStyle.photos !== undefined)
    && (
    <GalleryStyle className="gallery-container">
      <RightArrowStyle>
        <RightArrow
          data-testid="right-arrow"
          className="right-arrow"
        />
      </RightArrowStyle>
      {currentStyle.photos.map((photoSet) => (
        <div>
          <ImageStyle
            data-testid="full-image"
            className="full-image"
            alt="full image"
            src={photoSet.url}
          />
        </div>
      ))}
      <LeftArrowStyle>
        <LeftArrow
          data-testid="left-arrow"
          className="left-arrow"
        />
      </LeftArrowStyle>
    </GalleryStyle>
    )}
    </GalleryContainer>
  );
};

export default ImageGallery;
ImageGallery.propTypes = PropTypes.shape({
  products: PropTypes.arrayOf(PropTypes.object),
  styles: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.objectOf(PropTypes.any),
}).isRequired;
