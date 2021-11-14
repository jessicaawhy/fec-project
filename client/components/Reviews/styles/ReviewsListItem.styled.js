import styled from 'styled-components';
import Flex from '../../styles/Flex.styled';
import ButtonLink from '../../styles/ButtonLink.styled';

export const Item = styled.div`
  padding: 15px;

  <Flex>
`;

/* Header */

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;

  ${Flex} {
    > span {
      padding: 0 5px;
      color: rgb(100, 100, 100);
    };
  };
`;

/* Body */

export const Summary = styled.div`
  font-weight: bold;
  margin: 15px 0;
`;

export const Review = styled.div`
  margin: 15px 0;
`;

export const Recommend = styled.div`
  margin: 15px 0;
`;

export const Response = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(240, 240, 240);
  margin: 15px 0;
  padding: 15px;

  > * {
    &:first-child {
      font-weight: bold;
    };
  };
`;

export const ImgIcon = styled.img`
  margin: 15px 10px;
  height: 75px;
`;

/* Footer */

export const Footer = styled.div`
  display: flex;
  margin: 15px 0;

  ${Flex} {
    & :first-child {
      padding-right: 15px;
    };
  };

  & .separator {
    padding: 0 10px;
  }

  ${ButtonLink} {
    font-size: inherit;

    &.marked {
      color: rgb(179, 0, 0);
      text-decoration: none;
      cursor: auto;
      &:active {
        transform: none;
      }
    }
  };
`;
