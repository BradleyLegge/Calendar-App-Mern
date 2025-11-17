import { useEffect } from "react";
import { useBillsStore } from "../store/useBillsStore";
import { format } from "date-fns";

const Bills = () => {
  const { bills, fetchBills } = useBillsStore();

  useEffect(() => {
    fetchBills();
  }, [fetchBills]);

  return (
    <div className="bills-container">
      <div className="bills-header">
        <p>Bill Name</p>
        <p>Due Date</p>
        <p>Amount</p>
      </div>
      {bills.map((bill) => {
        const formattedDueDate = format(bill.dueDate, "MM dd yyyy");
        return (
          <div className="bills-body" key={bill._id}>
            <p>{bill.name}</p>
            <p>{formattedDueDate}</p>
            <p>{`$ ${bill.amount.toFixed(2)}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Bills;
