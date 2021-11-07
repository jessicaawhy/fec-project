import styled from 'styled-components';

export const Header = styled.div`
  margin-bottom: 10px;

  & :first-child {
    font-weight: bold;
    font-size: 55px;
    margin-right: 15px;
  };
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0;

  p {
    margin: 10px 0;
  };

  div, button {
    margin: 2px 0;
  };

  div > span {
    &:first-child::after {
      content: " ";
      white-space: pre;
    };
  };
`;

export const RatingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 5px;
`;

export const CharContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 5px;
`;
