import React from "react";
import Nav from "../components/Nav";
import Bills from "../components/Bills";
import BillForm from "../components/BillForm";

const Billspage = () => {
  return (
    <div className="billspage-container">
      <header>
        <Nav />
      </header>
      <div className="billspage-content">
        <BillForm />
        <Bills />
      </div>
    </div>
  );
};

export default Billspage;
