import React from "react";
import { NavLink } from "react-router";

const Nav = () => {
  return (
    <nav className="nav-container">
      <NavLink to="/" className="nav-links">
        Calendar
      </NavLink>
      <NavLink to="/bills" className="nav-links">
        Bills
      </NavLink>
    </nav>
  );
};

export default Nav;
