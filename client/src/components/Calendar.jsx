import React from "react";
import { Link } from "react-router";

const Calendar = () => {
  return (
    <div>
      <Link to="/">Calendar</Link>
      <Link to="/bills">Bills</Link>
    </div>
  );
};

export default Calendar;
