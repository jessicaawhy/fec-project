import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;

  > * {
    &:first-child {
      margin-right: 30px;
    }
  };
`;

export default Container;
