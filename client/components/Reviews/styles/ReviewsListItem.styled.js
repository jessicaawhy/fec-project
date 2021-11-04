import styled from 'styled-components';
import Flex from '../../styles/Flex.styled';
import ButtonLink from '../../styles/ButtonLink.styled';

export const Item = styled.div`
  margin: 10px 0;
  > * {
    margin: 10px 0;
  };
`;

/* Header */

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  ${Flex} {
    > span {
      padding: 0 5px;
      color: rgb(100, 100, 100);
    }
  }
`;

/* Body */

export const Summary = styled.div`
  font-weight: bold;
`;

export const Response = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(240, 240, 240);
  padding: 15px;
  > * {
    &:first-child {
      font-weight: bold;
    }
  }
`;

export const ImgIcon = styled.img`
  margin: 0 10px;
  height: 75px;
`;

/* Footer */

export const Footer = styled.div`
  display: flex;

  ${Flex} {
    > * {
      &:first-child {
        padding-right: 10px;
      }
      &:nth-child(2) {
        padding-right: 5px;
      }
    }
  };

  & .separator {
    padding: 0 10px;
  }

  ${ButtonLink} {
    font-size: inherit;
  };
`;
