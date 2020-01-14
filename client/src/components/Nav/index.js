import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <span className="navbar-brand">Google Books</span>
      <a className="nav-item nav-link" href="/">Search</a>
      <a className="nav-item nav-link" href="/saved">Saved</a>
    </nav>
  );
}

export default Nav;
