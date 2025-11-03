import React, { useEffect, useState } from "react";
import api from "../lib/axios";

const Bills = () => {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [amount, setAmount] = useState("");

  const [bill, setBill] = useState([]);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const res = await api.get("/bills");
        setBill(res.data);
      } catch (error) {
        console.log("Error fetching bill");
      }
    };
    fetchBills();
  }, []);

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
      </div>
      <div>
        {bill.map((bill) => (
          <p key={bill._id}>{bill.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Bills;
