import styled from 'styled-components';

const Button = styled.button`
  background-color: white;
  padding: 10px;
  border: 1px solid black !important;
  cursor: pointer;
  &:active {
    transform: translateY(3px);
  }
`;

export default Button;
