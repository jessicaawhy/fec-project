import styled from 'styled-components';

export const StyledContainer = styled.div`
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 30px 50px;

  select {
    padding: 15px;
    border: 1px solid black;
  }
`;

export const ModulesContainer = styled.div`
  > * {
    margin: 50px;
  }
`;
