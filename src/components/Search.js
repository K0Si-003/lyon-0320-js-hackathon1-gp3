import React from 'react';

const Search = ({search, handleChange, onClick}) => {
  return (
    <div>
      <input type='text' placeholder='Find your Jewel' value={search} onChange={handleChange} />
      <button onClick={onClick}>Search</button>
    </div>
  )
}

export default Search;