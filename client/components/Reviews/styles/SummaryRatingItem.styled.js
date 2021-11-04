import styled from 'styled-components';
import ButtonLink from '../../styles/ButtonLink.styled';

export const RatingContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  > * {
    margin: 5px;
  }
  ${ButtonLink} {
    font-size: inherit;
  };
`;

export const ProgressBorder = styled.div`
  background-color: rgb(225, 225, 225);
  height: 15px;
  flex-grow: 1;
  vertical-align: sub;
`;

export const ProgressBar = styled.div`
  background-color: rgb(100, 100, 100);
  height: 15px;
`;
