import styled from 'styled-components';

const Button = styled.button`
  background-color: inherit;
  padding: 10px;
  border: 1px solid black;
  cursor: pointer;
  &:active {
    transform: translateY(3px);
  }
`;

export default Button;
