import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "./logo.png";
const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 53) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  return (
    <header className={navbarClasses.join(" ")}>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Navbar;
