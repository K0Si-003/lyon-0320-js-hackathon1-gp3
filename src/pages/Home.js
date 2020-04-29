import React from "react";
import Search from "../components/Search";
import ThumbList from "../components/ThumbList";
import Header from "../components/Header";
import "../styles/Home.css";

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
      <header>
        <Header />
        <h1 className="title baseline">
          Find your favorite art piece !<br /> Use the search below :
        </h1>
      </header>
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
