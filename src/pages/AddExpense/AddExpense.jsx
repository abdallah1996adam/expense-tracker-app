import React from "react";
import { AddForm, TopBar } from "../../components";

import "./expense.css";

const AddExpense = () => {
  return (
    <div className="add-expense">
      <TopBar />
      <AddForm />
    </div>
  );
};

export default AddExpense;
