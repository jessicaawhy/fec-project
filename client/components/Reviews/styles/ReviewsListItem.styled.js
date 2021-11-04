import styled from 'styled-components';

export const Item = styled.div`
  > * {
    padding: 10px;
  };
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderDetail = styled.div`
  > span {
    padding: 4px;
  };
`;

export const Summary = styled.div`
  font-weight: bold;
`;

export const Body = styled.div`
`;

export const Footer = styled.div`
  > * {
    font-size: inherit;
  }
`;
