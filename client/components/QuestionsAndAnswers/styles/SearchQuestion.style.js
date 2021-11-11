import styled from 'styled-components';

export const Search = styled.form`
  width: 75%;
  input {
    width: 100%;
    height: 50px;
  };

`;
export const SearchInput = styled.input`
  border-radius: 15px;
  padding: 15px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: grey;
  }
  :-ms-input-placeholder {
     color: grey;
  }
`;

export const EmojiSpan = styled.span`
`;
