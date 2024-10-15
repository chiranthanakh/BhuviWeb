import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
      />
      <button className="search-button">
        <FaSearch className="search-icon" /> Search
      </button>
    </div>
  );
};

export default SearchBar;
