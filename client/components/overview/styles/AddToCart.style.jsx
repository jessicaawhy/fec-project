import styled from 'styled-components';

export const CartContainer = styled.div`
  display: block;
  width: -webkit-fill-available;
  position: absolute;
  margin: 0px;
  bottom: 0px;
`;

export const CartButton = styled.button`
  display: block;
  width: 91.5%;
  height: 45px;
  text-transform: uppercase;
  background-color: white;
  padding: 10px;
  border: 1px solid black !important;
  cursor: pointer;
  &:active {
    transform: translateY(3px);
  }
`;

export const DropDownContainer = styled.div`
  margin-left: -2px;
`;

export const DropDown = styled.select`
  width: 45%;
  height: 45px;
  margin-left: 3px;
  border: 1px solid black;
  margin-bottom: 7px;
  background-color: inherit;
  text-decoration: underline;
  &:focus {
    box-shadow: none;
    outline: none;
  }
  cursor: pointer;
`;
