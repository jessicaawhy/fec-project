import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 600px;
  grid-column-gap: 1%;
`;

export const GalleryStyle = styled.div`
  width: 400px;
  grid-column-gap: 0%;
  transform: translate3d(-0%, 0, 0);
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const ImageStyle = styled.img`
  max-height: 600px;
  max-width: 600px;
`;

export const ThumbnailContainer = styled.div`
  height: 600px;
  grid-row-gap: 1%;
  transform: translate3d(-0%, 0, 0);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform .5s ease-out;
`;

export const ThumbnailStyle = styled.img`
  max-height: 100px;
  max-width: 66px;
`;
