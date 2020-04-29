import React from "react";
import "../styles/Header.css";
const Header = () => {
  return (
    <img
      src={require("../images/Logo.png")}
      className="logo"
      alt="Logo Museum Search"
    />
  );
};
export default Header;
