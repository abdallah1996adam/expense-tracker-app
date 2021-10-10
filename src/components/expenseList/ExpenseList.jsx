import React from "react";

import Card from "../card/Card";
//css
import "./expense.css";
export const ExpenseList = () => {
  const list = [
    {
      logo: "heelo",
      amount: "555",
      title: "purchase",
      createdAt: Date.now(),
    },
    {
      logo: "heelo",
      amount: "555",
      title: "purchase",
      createdAt: Date.now(),
    },
  ];

  return (
    <div>
      {list.length ? list.map((index, item) => <Card item={item} />) : null}
    </div>
  );
};

export default ExpenseList;
