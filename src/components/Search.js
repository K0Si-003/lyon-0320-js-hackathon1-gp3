import React from "react";
import "../styles/Search.css";

const Search = ({ search, handleChange, onClick }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Find your Jewel"
        value={search}
        onChange={handleChange}
      />
      <button onClick={onClick}>Search</button>
    </div>
  );
};

export default Search;
