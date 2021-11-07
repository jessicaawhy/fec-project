import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  z-index: 100;
  backdrop-filter: blur(2px);
`;

export const PhotoContainer = styled.div`
  display: grid;
  grid-template: 5% 90% 5% / 5% 90% 5%;
  width: 70%;
  height: 70%;
  background-color: rgb(240, 240, 240);

  button {
    grid-area: 1 / 3 / 2 / 4;
    place-self: start end;
    padding: 10px;
    border: none;
    font-size: larger;
  };

  img {
    grid-area: 2 / 2 / 3 / 3;
    object-fit: contain;
    height: 90%;
    width: 90%;
    place-self: center;
  };
`;
