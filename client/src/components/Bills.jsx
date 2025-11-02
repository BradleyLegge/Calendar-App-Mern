import React, { useEffect, useState } from "react";
import api from "../lib/axios";
const Bills = () => {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [amount, setAmount] = useState("");

  const [bills, setBills] = useState([]);

  // Fetching all bills from database
  const fetchBills = async () => {
    try {
      const res = await api.get("/bills");
      console.log(res.data);
      setBills(res.data);
    } catch (error) {
      console.log("Error fetching bill.");
    }
  };

  useEffect(() => {
    fetchBills();
  }, []);

  // Delete bill from database
  const deleteBill = async (id) => {
    console.log(typeof id);
    try {
      await api.delete(`/bills/${id}`);
      fetchBills();
    } catch (error) {
      console.log("Error deleting bill.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !dueDate || !amount) {
      console.log("Provide information!");
      return;
    }

    try {
      await api.post("/bills", {
        name,
        dueDate,
        amount,
      });
      console.log("Bill created successfully!");
    } catch (error) {
      console.log("Error creating bill.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <label>Amount</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit">Add bill</button>
      </form>
      <div>
        <h1>Hello</h1>
        {bills.map((bill) => (
          <div key={bill._id}>
            <p>{bill.name}</p>
            <button onClick={() => deleteBill(bill._id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bills;
