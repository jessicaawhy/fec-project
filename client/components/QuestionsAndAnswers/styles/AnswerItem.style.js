import styled from 'styled-components';

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px 10px 10px;
`;
/* top | right | bottom | left */
export const AnswerBody = styled.div`
  padding: 0 0 0 3px;
`;
export const AnswerDetails = styled.div`
  display: flex;
  align-items: space-between;
  width: 35%;
  font-size: 11px;
`;
export const FlexSpan = styled.span`
  flex-grow: 2;
  padding: 11px;
  font-size: 11px;
`;
export const UnderLine = styled.button`
  flex-grow: 2
  padding: 5px;
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
