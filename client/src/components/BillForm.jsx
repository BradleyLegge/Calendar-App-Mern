import { useState } from "react";
import { useBillsStore } from "../store/useBillsStore";

const BillForm = () => {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [amount, setAmount] = useState("");
  const addBill = useBillsStore((state) => state.addBill);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !dueDate || !amount) {
      console.log("Provide information!");
      return;
    }

    await addBill({
      name,
      dueDate: new Date(dueDate),
      amount: parseFloat(amount),
    });

    setName("");
    setDueDate("");
    setAmount("");
  };

  return (
    <div className="billForm-container">
      <form className="billForm-form" onSubmit={handleSubmit}>
        <div className="billForm-inputs">
          <label>Title</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="billForm-inputs">
          <label>Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <div className="billForm-inputs">
          <label>Amount</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button className="btn" type="submit">
          Add bill
        </button>
      </form>
    </div>
  );
};

export default BillForm;
