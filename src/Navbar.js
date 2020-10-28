import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
const Navbar = () => {
  return (
    <div className="bar">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Navbar;
