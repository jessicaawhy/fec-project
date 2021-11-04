import styled from 'styled-components';

export const RatingContainer = styled.div`
  display: flex;
  width: 100%;
  > * {
    margin: 5px;
  }
`;

export const ButtonLink = styled.button`
  background-color: inherit;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  &:active {
    transform: translateY(1px);
  }
`;

export const ProgressBorder = styled.div`
  background-color: #9e9e9e;
  height: 15px;
  flex-grow: 1;
`;

export const ProgressBar = styled.div`
  background-color: black;
  height: 15px;
`;
