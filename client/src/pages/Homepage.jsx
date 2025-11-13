import React from "react";
import Nav from "../components/Nav";
import Calendar from "../components/Calendar";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <header>
        <Nav />
      </header>
      <div>
        <Calendar />
      </div>
    </div>
  );
};

export default Homepage;
