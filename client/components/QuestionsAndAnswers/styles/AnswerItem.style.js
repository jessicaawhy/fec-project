import styled from 'styled-components';

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AnswerBody = styled.div`
  padding: 3px;
`;
export const AnswerDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`;
export const UnderLine = styled.button`
  text-decoration: underline;
  cursor: pointer;
  background-color: inherit;
  border: 0;
  &.marked {
    color: rgb(179, 0, 0);
    text-decoration: none;
    cursor: auto;
    &:active {
      transform: none;
    }
  }
`;
export const Image = styled.img`
  margin: 0 10px;
  height: 75px;
  flex-direction: row;
`;
export const ImgContainer = styled.div`
  display: flex;
  padding: 5px;
`;

export const PopupImg = styled.img`
  width: 300px;
`;
