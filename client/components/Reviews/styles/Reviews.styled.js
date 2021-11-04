import styled from 'styled-components';

export const Button = styled.button`
  background-color: inherit;
  padding: 10px;
  border: 1px solid black;
  margin: 5px;
  cursor: pointer;
  &:active {
    transform: translateY(3px);
  }
`;

export const SelectSort = styled.select`
  background-color: inherit;
  border: none;
  text-decoration: underline;
`;
