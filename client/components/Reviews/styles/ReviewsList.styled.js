import styled from 'styled-components';

const List = styled.div`
  margin: 20px 0;
  overflow: auto;

  > :not(:last-child) {
    border-bottom: 1px solid rgb(100, 100, 100);
  };
`;

export default List;
