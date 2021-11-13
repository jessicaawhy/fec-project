import styled from 'styled-components';

export const GalleryCSS = styled.div`
position: relative;
height: 567px;
width: 100%;
max-width: 1000px;
overflow: hidden;
`;

export const GalleryContent = styled.div`
transform: translateX(-${(props) => props.translate}px);
transition: transform ease-out ${(props) => props.transition}s;
height: 100%;
width: ${(props) => props.width}px;
object-fit: cover;
display: flex;
`;

export const Image = styled.div`
  height: 100;
  width: 100%;
  background-image: url(${(props) => props.photo});
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Arrow = styled.span`
  position: absolute;
  top: 42%;
  left: ${(props) => props.adjust}%;
  color: black;
  font-size: 100px;
  line-height: 100px;
`;
