import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Link to="/">
      <img
        src={require("../images/Logo.png")}
        className="logo"
        alt="Logo Museum Search"
      />
    </Link>
  );
};
export default Header;
