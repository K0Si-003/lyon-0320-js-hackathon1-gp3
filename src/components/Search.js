import React from 'react';
import '../styles/Search.css';

const Search = ({ search, handleChange, onClick, onSubmit }) => {
  return (
    <form className="search" onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Find your Jewel'
        value={search}
        onChange={handleChange}
        onSubmit={onClick}
      />
      <button onClick={onClick}>Search</button>
    </form>
  );
};

export default Search;
