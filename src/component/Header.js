import React from "react";
import "./Header.css";

function Header() {
  return (
    <nav className="header">
      <div className="logo">Dantewada Tourism</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#homestays">Homestays</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Header;
