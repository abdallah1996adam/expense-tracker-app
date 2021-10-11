import React, { useState } from "react";
//icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoPaperPlaneOutline } from "react-icons/io5";

import { categories } from "../../constants";

//scss
import "./addform.css";

export const AddForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleAmount = (e) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value)) {
      setAmount("");
      return;
    }
    setAmount(value);
  };

  const handleCategory = (clickedCategory) => {
    setCategory(clickedCategory);
    setIsOpen(false);
  };

  const handleSubmit = ()=>{
    if(amount===""|| title===""|| !category){
      console.log('no data');
      return
    }
    const data = {
      title,
      category,
      amount,
      creadtedAt:Date.now()
    }
  }
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
          <div className="category-dropdown" onClick={() => setIsOpen(!isOpen)}>
            <label> {category ? category.title : "Category"}</label>
            <MdKeyboardArrowDown />
          </div>
          {isOpen && (
            <div className="category-wrapper">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="categ-item"
                  style={{ borderRight: `5px solid ${cat.color}` }}
                  onClick={() => handleCategory(cat)}
                >
                  <label>{cat.title}</label>
                  <i>{cat.icon}</i>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <div className="form-add-btn">
        <div onClick={handleSubmit}>
          <span>Add</span>
          <IoPaperPlaneOutline />
        </div>
      </div>
    </main>
  );
};

export default AddForm;
