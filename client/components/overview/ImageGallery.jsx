import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  GalleryCSS, Image, GalleryContent, Arrow,
} from './styles/ImageGallery.style';

const ImageGallery = ({ currentStyle }) => {
  const width = 858;

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

/** tech debt: make arrows disappear when at the beginning and end of currentStyle.photos array */
/* const [showArrow, setShowArrow] = useState({
  previous: true,
  next: true,
}); */

/* {showArrow.next
  ? <Arrow type="submit" adjust={92} onClick={nextSlide}>&#10095;</Arrow>
  : null}
{showArrow.previous
  ? <Arrow type="submit" adjust={2} onClick={prevSlide}>&#10094;</Arrow>
  : null} */

/* const prevSlide = () => {
  console.log('prevSlide running....');

  if (activeIndex === 0) {
    return setShowArrow({
      ...showArrow,
      previous: false,
    });
  }
  setShowArrow({
    ...showArrow,
    previous: true,
  });

  setState({
    ...state,
    activeIndex: activeIndex - 1,
    translate: (activeIndex - 1) * width,
  });
}; */

/* const nextSlide = () => {
  console.log('nextSlide running....');

  if (activeIndex === currentStyle.photos.length - 1) {
    return setShowArrow({
      ...showArrow,
      next: false,
    });
  }
  setShowArrow({
    ...showArrow,
    next: true,
  });

  setState({
    ...state,
    activeIndex: activeIndex + 1,
    translate: (activeIndex + 1) * width,
  });
}; */
