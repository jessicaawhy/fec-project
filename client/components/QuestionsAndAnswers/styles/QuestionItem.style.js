import styled from 'styled-components';

export const QuestionDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  padding: 10px;
`;

export const QuestionBody = styled.div`
  grid-column: span 2;
  justify-content: start;
  font-weight: bold;
  padding: 2px;
`;
export const QuestionMisc = styled.div`
  grid-column: span 1;
  align-items: space-between;
  justify-self: end;
`;

export const UnderLine = styled.button`
  padding: 5px;
  font-size: 15px;
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
/* top | right | bottom | left */
export const LoadMore = styled.button`
  cursor: pointer;
  border: 0;
  padding: 0px 8px 15px 15px;
  background-color: inherit;
  font-weight: bold;
`;
