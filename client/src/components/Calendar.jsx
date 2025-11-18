import React, { useEffect, useState } from "react";
import "date-fns";
import { useBillsStore } from "../store/useBillsStore";
import {
  format,
  isSameDay,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  addMonths,
  subMonths,
} from "date-fns";
import CalendarDetails from "../components/CalendarDetails";

const WEEKDAYS = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

const Calendar = () => {
  const { bills, fetchBills } = useBillsStore();

  const [selectedDay, setSelectedDay] = useState(null);
  const [existingBill, setExistingBill] = useState(null);

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
  const handleExistingBill = (day, bill) => {
    setExistingBill(bill);
    setSelectedDay(day);
  };

  const toUTCDate = (date) => {
    const d = new Date(date);
    return new Date(
      Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())
    );
  };

  useEffect(() => {
    fetchBills();
  }, [fetchBills]);

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="btn" onClick={handlePrevMonth}>
          Prev
        </button>
        <h2 className="month-name">{format(currentMonth, "MMMM yyyy")}</h2>
        <button className="btn" onClick={handleNextMonth}>
          Next
        </button>
      </div>
      <div className="calendar-body">
        {WEEKDAYS.map((day) => (
          <p className="weekday" key={day}>
            {day}
          </p>
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
              <p className="current-day">{day.getDate()}</p>
              <div className="events-container">
                {dayBills.map((bill) => (
                  <div
                    className="event-bill"
                    onClick={() => handleExistingBill(day, bill)}
                    key="bill._id"
                  >
                    <p>{bill.name}</p>
                    <p>{`$ ${bill.amount.toFixed(2)}`}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {selectedDay && (
        <CalendarDetails
          existingBill={existingBill}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      )}
    </div>
  );
};

export default Calendar;
