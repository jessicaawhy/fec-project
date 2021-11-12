import styled from 'styled-components';

const Button = styled.button`
  padding: 25px;
  font-size: 1em;
  color: black;
  border: 2px solid black;
  border-radius:20px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background:#016ABC;
     color: #fff;
     border:1px solid #eee;
     border-radius:20px;
     box-shadow:5px 5px 5px #eee;
     text-shadow: none;
  }
`;

export default Button;
