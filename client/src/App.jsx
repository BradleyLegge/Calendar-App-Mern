import React from "react";
import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Bills from "./components/Bills";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/bills" element={<Bills />} />
      </Routes>
    </div>
  );
};

export default App;
