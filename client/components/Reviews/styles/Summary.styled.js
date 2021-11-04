import styled from 'styled-components';

export const Header = styled.div`
  & :first-child {
    font-weight: bold;
    font-size: 55px;
    margin-right: 15px;
  }
  margin-bottom: 20px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
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
