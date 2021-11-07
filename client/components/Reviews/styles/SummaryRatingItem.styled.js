import styled from 'styled-components';
import ButtonLink from '../../styles/ButtonLink.styled';

export const Rating = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: rgb(245, 245, 245);
  };

  > * {
    margin: 5px;
  };

  ${ButtonLink} {
    font-size: inherit;
  };
`;

export const ProgressBorder = styled.div`
  flex-grow: 1;
  height: 15px;
  background-color: rgb(225, 225, 225);
`;

export const ProgressBar = styled.div`
  height: 15px;
  background-color: rgb(100, 100, 100);
`;
