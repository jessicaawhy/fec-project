import React from 'react';
import PropTypes from 'prop-types';
import { Search, SearchInput } from './styles/SearchQuestion.style';

const SearchQuestion = ({ handleSearch }) => {
  const handleSearchInput = (e) => {
    const input = e.target.value.toLowerCase();
    handleSearch(input);
  };

  return (
    <Search data-testid="searchQuestions">
      <SearchInput
        type="text"
        placeholder="HAVE A QUESTIONS? SEARCH FOR ANSWERS... " // 🔍
        onChange={handleSearchInput}
      />
    </Search>
  );
};

SearchQuestion.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
export default SearchQuestion;
