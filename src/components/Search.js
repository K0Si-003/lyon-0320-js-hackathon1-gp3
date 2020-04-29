import React from 'react';
import '../style/search.css'

const Search = ({search, handleChange, onClick}) => {
  return (
      <div className='search'>
        <input className='searchTerm' type='text' placeholder='Find your Jewel' value={search} onChange={handleChange}/>
        <button className='searchButton' onClick={onClick}>Search</button>
      </div>
  )
}

export default Search;