import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: flex;
  grid-template-columns: max-content 600px;
  grid-column-gap: 0%;
  transform: translate3d(-0%, 0, 0);
  `;

export const GalleryStyle = styled.div`
  width: 100%;
  grid-template-columns: max-content 600px;


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

export const RightArrowStyle = styled.div`
  align-items: center;
  border: 1px solid rgb(211, 212, 213);
  background: #1f2020;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 45%;
  left: 90%;
  height: 48px;
  width: 48px;
`;

export const RightArrow = styled.span`
  display: inline-block;
  border-bottom: 3px solid rgb(77, 85, 89);
  border-right: 3px solid rgb(77, 85, 89);
  box-sizing: border-box;
  margin-right: 9px;
  transform: rotate(-45deg);
  transition: all 250ms ease-in-out 0s;
  width: 50%;
  height: 50%;
`;

export const LeftArrowStyle = styled.div`
  align-items: center;
  border: 1px solid rgb(211, 212, 213);
  background: #1f2020;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 45%;
  left: 2%;
  height: 48px;
  width: 48px;
`;

export const LeftArrow = styled.span`
  display: inline-block;
  border-bottom: 3px solid rgb(77, 85, 89);
  border-right: 3px solid rgb(77, 85, 89);
  box-sizing: border-box;
  margin-left: 8px;
  transform: rotate(135deg);
  transition: all 250ms ease-in-out 0s;
  width: 50%;
  height: 50%;
`;

export const UpArrowStyle = styled.div`
  align-items: center;
  border: 1px solid rgb(211, 212, 213);
  background: #1f2020;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0%;
  left: 25%;
  height: 30px;
  width: 30px;
`;

export const UpArrow = styled.span`
  display: inline-block;
  border-bottom: 3px solid rgb(77, 85, 89);
  border-right: 3px solid rgb(77, 85, 89);
  box-sizing: border-box;
  margin-top: 5px;
  margin-right: 0px;
  transform: rotate(-135deg);
  transition: all 250ms ease-in-out 0s;
  width: 50%;
  height: 50%;
`;

export const DownArrowStyle = styled.div`
  align-items: center;
  border: 1px solid rgb(211, 212, 213);
  background: #1f2020;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 95%;
  left: 25%;
  height: 30px;
  width: 30px;
`;

export const DownArrow = styled.span`
  display: inline-block;
  border-bottom: 3px solid rgb(77, 85, 89);
  border-right: 3px solid rgb(77, 85, 89);
  box-sizing: border-box;
  margin-bottom: 5px;
  margin-right: 0px;
  transform: rotate(45deg);
  transition: all 250ms ease-in-out 0s;
  width: 50%;
  height: 50%;
`;
