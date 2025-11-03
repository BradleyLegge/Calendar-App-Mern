import React from "react";
import { Link } from "react-router";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Calendar</Link>
      <Link to="/bills">Bills</Link>
    </nav>
  );
};

export default Nav;
