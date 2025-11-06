import React, { useEffect, useState } from "react";
import "date-fns";
import { useBillsStore } from "../store/useBillsStore";
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
  addMonths,
  subMonths,
  isSameDay,
} from "date-fns";

const WEEKDAYS = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);

  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const daysOfMonth = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  });

  const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const { bills, fetchBills } = useBillsStore();
  useEffect(() => {
    fetchBills();
  }, [fetchBills]);

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>Prev</button>
        <h2>{format(currentMonth, "MMMM yyyy")}</h2>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      <div className="calendar-body">
        {WEEKDAYS.map((day) => (
          <p key={day}>{day}</p>
        ))}
        {daysOfMonth.map((day) => {
          const isCurrentMonth = day.getMonth() === currentMonth.getMonth();
          const isToday =
            format(day, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");

          return (
            <div
              key={day}
              className={`calendar-day ${
                isCurrentMonth ? isToday && "today" : "not-current-month"
              }`}
            >
              <p>{day.getDate()}</p>
              {bills
                .filter((bill) => isSameDay(bill.dueDate, day))
                .map((bill) => {
                  return <p key={bill.name}>{bill.name}</p>;
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
