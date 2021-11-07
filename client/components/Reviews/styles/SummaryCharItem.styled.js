import styled from 'styled-components';

export const StyledCharItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4px 0;

  > * {
    margin: 1px 0;
  };
`;

export const CharBorder = styled.div`
  height: 15px;
  flex-grow: 1;
  background-color: rgb(225, 225, 225);
`;

export const CharMarker = styled.div`
  position: relative;
  height: 15px;
  width: 4px;
  left: 50%;
  background-color: rgb(100, 100, 100);
`;

export const Labels = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: smaller;
  };
`;
