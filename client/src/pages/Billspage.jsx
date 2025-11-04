import React from "react";
import Nav from "../components/Nav";
import Bills from "../components/Bills";

const Billspage = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <div>
        <Bills />
      </div>
    </div>
  );
};

export default Billspage;
