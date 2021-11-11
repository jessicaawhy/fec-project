/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  SliderCSS, Slide, SliderContent, Arrow,
} from './styles/Slider.style';

const ImageSlider = ({ currentStyle }) => {
  const width = 600;

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });
  // const [hideArrow, setHideArrow] = useState({
  //   previous: false,
  //   next: false,
  // });

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    console.log('nextSlide running....');

    if (activeIndex === currentStyle.photos.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * width,
    });
  };

  const prevSlide = () => {
    console.log('prevSlide running....');

    if (activeIndex === 0) {
      // return setHideArrow({
      //   ...hideArrow,
      //   previous: true,
      // });
      return setState({
        ...state,
        translate: (currentStyle.photos.length - 1) * width,
        activeIndex: currentStyle.photos.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * width,
    });
  };

  return (
    (Object.keys(currentStyle).length !== 0)
    && (
      <>
        <SliderCSS>
          <SliderContent
            translate={translate}
            transition={transition}
            width={width * currentStyle.photos.length}
          >
            {currentStyle.photos.map((slide) => (
              <Slide photo={slide.url} />
            ))}
          </SliderContent>
        </SliderCSS>
        <Arrow type="submit" adjust={92} onClick={nextSlide}>&#10095;</Arrow>
        <Arrow type="submit" adjust={2} onClick={prevSlide}>&#10094;</Arrow>
      </>
    )
  );
};

export default ImageSlider;

ImageSlider.propTypes = {
  currentStyle: PropTypes.objectOf(PropTypes.any).isRequired,
};

// const Arrow = ({ direction, handleClick }) => (
//   <div
//     onClick={handleClick}
//     css={css`
//       display: flex;
//       position: absolute;
//       top: 50%;
//       ${direction === 'right' ? 'right: 25px' : 'left: 25px'};
//       height: 50px;
//       width: 50px;
//       justify-content: center;
//       background: white;
//       border-radius: 50%;
//       cursor: pointer;
//       align-items: center;
//       transition: transform ease-in 0.1s;
//       &:hover {
//         transform: scale(1.1);
//       }
//       img {
//         transform: translateX(${direction === 'left' ? '-2' : '2'}px);
//         &:focus {
//           outline: 0;
//         }
//       }
//     `}
//   >
//     {/* {direction === 'right' ?  */}
//     <button type="submit">❯</button>
//     {' '}
//     {/* : */}
//     {' '}
//     <button type="submit">❮</button>
//     {/* } */}
//   </div>
// );
