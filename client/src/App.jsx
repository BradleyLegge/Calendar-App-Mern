import React from "react";
import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Billspage from "./pages/Billspage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/bills" element={<Billspage />} />
      </Routes>
    </div>
  );
};

export default App;
