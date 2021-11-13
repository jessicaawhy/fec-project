import styled from 'styled-components';

export const StyleSelectorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-contnet: flex-start;
  gap: 10px;
`;

export const Style = styled.p`
  text-transform: uppercase;
  display: inline-block;
  padding-bottom: 5px;
  letter-spacing: 1px;
`;

export const ButtonStyle = styled.input`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid #3C3F3F;
  object-fit: cover;
`;
