import React from "react";
import { format } from "date-fns";

const CalendarDetails = ({ existingBill, selectedDay, setSelectedDay }) => {
  return (
    <div className="calendar-details-container">
      <div className="calendar-details-content">
        <button
          className="btn close-modal-btn"
          onClick={() => setSelectedDay(null)}
        >
          Close
        </button>
        <div className="calendar-details-info">
          <p>{existingBill.name}</p>
          <p>{format(selectedDay, "MM-dd-yyyy")}</p>
          <p>{`$ ${existingBill.amount.toFixed(2)}`}</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarDetails;
