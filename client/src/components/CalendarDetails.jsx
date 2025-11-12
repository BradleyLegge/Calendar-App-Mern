import React from "react";
import { format } from "date-fns";

const CalendarDetails = ({ existingBill, selectedDay, setSelectedDay }) => {
  return (
    <div className="calendar-details-container">
      <div className="calendar-details-content">
        <button onClick={() => setSelectedDay(null)}>Close</button>
        <p>{format(selectedDay, "yyyy-MM-dd")}</p>
        <div>
          <p>{existingBill.name}</p>
          <p>{existingBill.dueDate}</p>
          <p>{existingBill.amount}</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarDetails;
