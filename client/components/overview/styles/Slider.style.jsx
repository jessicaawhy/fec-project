import React from 'react';
import styled, { css } from 'styled-components';

export const SliderCSS = styled.div`
position: relative;
height: 567px;
max-width: 1000px;
overflow: hidden;
`;

export const SliderContent = styled.div`
transform: translateX(-${(props) => props.translate}px);
transition: transform ease-out ${(props) => props.transition}s;
height: 100%;
width: ${(props) => props.width}px;
object-fit: cover;
display: flex;
background: yellow;
`;

export const Slide = styled.div`
  height: 100;
  width: 100%;
  background-image: url(${(props) => props.photo});
  /* object-fit: cover; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Arrow = styled.span`
  position: absolute;
  top: 42%;
  left: ${(props) => props.adjust}%;
  color: yellow;
  font-size: 100px;
  line-height: 100px;

  /* border-bottom: 3px solid rgb(77, 85, 89);
  border-right: 3px solid rgb(77, 85, 89);
  box-sizing: border-box;
  margin-left: 8px;
  transform: rotate(135deg);
  transition: all 250ms ease-in-out 0s; */
`;
