import React from 'react';
import './search-box.styles.css';

export const SearchBox = function({placeholder, handleChange}){
    return (
      <input
        type="search"
        className= 'search'
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
}