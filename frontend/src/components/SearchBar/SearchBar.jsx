import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css'; 

const SearchBar = ({ searchTerm, onSearchTermChange, onSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar"
        value={searchTerm}
        onChange={onSearchTermChange}
        className="search-input"
      />
      <button onClick={onSearch} className="search-button">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
