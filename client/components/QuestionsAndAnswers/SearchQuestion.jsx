import React, { useState } from 'react';
import styled from 'styled-components';

// style

const SearchQuestion = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <Search data-testid='searchQuestions'>
      <input
        type="text"
        placeholder="HAVE A QUESTIONS? SEARCH FOR ANSWERS... " // 🔍
        onChange={handleSearchInput}
      />
    </Search>
  );
};

// style
const Search = styled.form`
  width: 666px;
  input {
    width: 100%;
    height: 50px;
  }
`;

export default SearchQuestion;
