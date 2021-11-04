import styled from 'styled-components';

export const List = styled.div`
  margin: 20px 0;
  max-height: 85%;
  overflow: scroll;
  > :not(:last-child) {
    border-bottom: 1px solid rgb(100, 100, 100);
  };
`;
