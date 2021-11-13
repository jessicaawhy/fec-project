import styled from 'styled-components';

export const CartContainer = styled.div`
  display: block;
  width: 100%;
  max-width: 406px;
  position: absolute;
  margin: 0px;
  bottom: 0px
;
`;

export const CartButton = styled.button`
  display: block;
  width: 100%;
  /* max-width: 406px; */
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

export const DropDown = styled.select`
  width: 100%;
  max-width: 203px;
  height: 45px;
  padding: 0px;
  border: 1px solid black;
  margin-bottom: 10px;
  background-color: inherit;
  text-decoration: underline;
  &:focus {
    box-shadow: none;
    outline: none;
  }
  cursor: pointer;
`;
