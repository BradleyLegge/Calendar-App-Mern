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
  parseISO,
} from "date-fns";

const WEEKDAYS = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

const Calendar = () => {
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

  const toUTCDate = (date) => {
    const d = new Date(date);
    return new Date(
      Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())
    );
  };

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

          const dayBills = bills.filter((bill) => {
            return isSameDay(toUTCDate(bill.dueDate), toUTCDate(day));
          });
          return (
            <div
              key={day}
              className={`calendar-day ${
                isCurrentMonth ? isToday && "today" : "not-current-month"
              }`}
            >
              <p>{day.getDate()}</p>
              {dayBills.map((bill) => (
                <p key="bill._id">{bill.name}</p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
