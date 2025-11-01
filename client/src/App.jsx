import React from "react";
import { Route, Routes } from "react-router";
import Calendar from "./components/Calendar";
import Bills from "./components/Bills";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/bills" element={<Bills />} />
      </Routes>
    </div>
  );
};

export default App;
