import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  GalleryCSS, Image, GalleryContent, Arrow,
} from './styles/ImageGallery.style';

const ImageGallery = ({ currentStyle }) => {
  const width = 600;

  const [imagePosition, setImagePosition] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = imagePosition;

  const nextImage = () => {
    if (activeIndex === currentStyle.photos.length - 1) {
      return setImagePosition({
        ...imagePosition,
        translate: 0,
        activeIndex: 0,
      });
    }

    return setImagePosition({
      ...imagePosition,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * width,
    });
  };

  const prevImage = () => {
    if (activeIndex === 0) {
      return setImagePosition({
        ...imagePosition,
        translate: (currentStyle.photos.length - 1) * width,
        activeIndex: currentStyle.photos.length - 1,
      });
    }

    return setImagePosition({
      ...imagePosition,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * width,
    });
  };

  useEffect(() => {
    setImagePosition({
      activeIndex: 0,
      translate: 0,
      transition: 0.45,
    });
  }, [currentStyle]);

  return (
    (Object.keys(currentStyle).length !== 0)
    && (
      <>
        <GalleryCSS>
          <GalleryContent
            translate={translate}
            transition={transition}
            width={width * currentStyle.photos.length}
          >
            {currentStyle.photos.map((photo) => (
              <Image photo={photo.url} />
            ))}
          </GalleryContent>
        </GalleryCSS>
        {(currentStyle.photos.length > 2)
        && (
        <>
          <Arrow type="submit" adjust={2} onClick={prevImage}>&#10094;</Arrow>
          <Arrow type="submit" adjust={92} onClick={nextImage}>&#10095;</Arrow>
        </>
        )}
      </>
    )
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  currentStyle: PropTypes.objectOf(PropTypes.any).isRequired,
};
