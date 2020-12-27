import React from "react";

const SearchBar = ({ term, onSearchTerm, onSearchTermChange, onSearch }) => {
	const onInputChange = term => {
    onSearchTerm(term);
    onSearchTermChange(term);
  }
  
  return (
    <div className="search-bar">
      <input 
        data-testid="search-bar-input"
        value = {term}
        onChange = {event => onInputChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
