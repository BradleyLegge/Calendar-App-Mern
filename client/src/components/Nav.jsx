import React from "react";
import { Link } from "react-router";

const Nav = () => {
  return (
    <nav className="nav-container">
      <Link to="/" className="nav-links">
        Calendar
      </Link>
      <Link to="/bills" className="nav-links">
        Bills
      </Link>
    </nav>
  );
};

export default Nav;
