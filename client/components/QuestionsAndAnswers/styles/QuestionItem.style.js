import styled from 'styled-components';

export const QuestionDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const QuestionBody = styled.h4`
  padding: 2px;
`;
export const QuestionMisc = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`;
export const UnderLine = styled.button`
  text-decoration: underline;
  cursor: pointer;
  border: 0;
  background-color: inherit;
  &.marked {
    color: rgb(179, 0, 0);
    text-decoration: none;
    cursor: auto;
    &:active {
      transform: none;
    }
  }
`;

export const LoadMore = styled.button`
  cursor: pointer;
  border: 0;
  padding: 8px;
  background-color: inherit;
  font-weight: bold;
`;
