import styled from 'styled-components';

const ButtonLink = styled.button`
  background-color: inherit;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  &:active {
    transform: translateY(1px);
  }
`;

export default ButtonLink;
