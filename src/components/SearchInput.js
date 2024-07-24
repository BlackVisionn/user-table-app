// src/components/SearchInput.js
import React from 'react';

const SearchInput = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Поиск..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchInput;
