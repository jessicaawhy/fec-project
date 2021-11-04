import styled from 'styled-components';

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonLink = styled.button`
  background-color: inherit;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  &:active {
    transform: translateY(1px);
  }
`;

export const CharBorder = styled.div`
  background-color: #9e9e9e;
  height: 15px;
  flex-grow: 1;
`;

export const CharMarker = styled.div`
  background-color: black;
  height: 15px;
  width: 4px;
  position: relative;
  left: 50%;
`;
