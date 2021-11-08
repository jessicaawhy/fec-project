import React from 'react';
import PropTypes from 'prop-types';
import Search from './styles/SearchQuestion.style';

const SearchQuestion = ({ handleSearch }) => {
  // const [searchInput, setSearchInput] = useState('');
  const handleSearchInput = (e) => {
    const input = e.target.value.toLowerCase();
    // setSearchInput(input);
    handleSearch(input);
  };

  return (
    <Search data-testid="searchQuestions">
      <input
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
