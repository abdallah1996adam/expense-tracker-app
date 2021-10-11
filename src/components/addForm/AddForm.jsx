import React, { useState } from "react";
//icons
import { MdKeyboardArrowDown } from "react-icons/md";

//scss
import "./addform.css";

export const AddForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(null);

  const handleAmount = (e) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value)) {
      setAmount("");
      return;
    }
    setAmount(value);
  };
  return (
    <main className="add-form">
      <section className="form-item">
        <label>Title</label>
        <input
          className="form-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </section>
      <section className="form-item">
        <label>Amount</label>
        <input
          type="text"
          className="amount-input"
          value={amount}
          onChange={(e) => handleAmount(e)}
        />
      </section>
      <section className="category-container">
        <div className="category">
          <div>
            <label>Category</label>
            <MdKeyboardArrowDown />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddForm;
