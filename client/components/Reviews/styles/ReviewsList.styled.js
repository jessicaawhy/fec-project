import styled from 'styled-components';

export const List = styled.div`
  margin: 20px 0;
  flex-grow: 1;
  overflow: auto;
  > :not(:last-child) {
    border-bottom: 1px solid rgb(100, 100, 100);
  };
`;
