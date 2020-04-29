import React from "react";
import Search from "../components/Search";
import ThumbList from "../components/ThumbList";

const Home = ({
  onSearch,
  resultsIds,
  results,
  search,
  handleChange,
  onClick,
  onLoad,
}) => {
  return (
    <>
      <main>
        <Search search={search} handleChange={handleChange} onClick={onClick} />
        {onSearch && resultsIds !== null ? (
          <ThumbList items={results} method={onLoad} />
        ) : (
          <p>Error</p>
        )}
      </main>
    </>
  );
};

export default Home;
