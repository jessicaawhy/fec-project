import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  createThumbnailPhotoSet, createFullPhotoSet, goToPreviousPhoto, goToNextPhoto,
}
  from './helpers/imageGalleryHelpers';
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
  // const [translateValue, setTranslateValue] = useState(0);

  useEffect(() => {
    console.log('useEffect() ImageGallery running....');
    if (currentStyle.photos) {
      setThumbnailPhotos(createThumbnailPhotoSet(currentStyle));
      setFullPhotos(createFullPhotoSet(currentStyle));
    }
  }, [currentStyle]);

  return (
    <GalleryContainer
      data-testid="gallery-container"
      className="gallery-container"
    >
      {/* <RightArrow
        data-testid="right-arrow"
        className="right-arrow"
        onClick={() => goToNextPhoto(currentIndex, setCurrentIndex, fullPhotos)}
      /> */}
      {(fullPhotos)
        && (
          fullPhotos.map((photo, i) => (
            <div>
              <ImageStyle
                data-testid="full-image"
                className="full-image"
                alt="full image"
                key={i}
                src={photo}
              />
            </div>
          )))}
      {/* <LeftArrow
        data-testid="left-arrow"
        className="left-arrow"
        onClick={() => goToPreviousPhoto(currentIndex, setCurrentIndex)}
      /> */}
    </GalleryContainer>
  );
};

export default ImageGallery;
ImageGallery.propTypes = PropTypes.shape({
  products: PropTypes.arrayOf(PropTypes.object),
  styles: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.objectOf(PropTypes.any),
}).isRequired;
