import React, { useState } from 'react';
import styled from 'styled-components';

// style

const SearchQuestion = ({ handleSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = (e) => {
    const input = e.target.value.toLowerCase();
    // setSearchInput(input);
    handleSearch(input);
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
