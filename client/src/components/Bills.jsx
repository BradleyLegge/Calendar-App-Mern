import React, { useState } from "react";
import axios from "axios";

const Bills = () => {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !dueDate || !amount) {
      console.log("Provide information!");
      return;
    }

    try {
      await axios.post("http://localhost:5001/api/bills", {
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
    </div>
  );
};

export default Bills;
