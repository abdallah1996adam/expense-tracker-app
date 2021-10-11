import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
//css
import "./expense.css";
export const ExpenseList = () => {
  const {expenseList} = useSelector((store) => store.expenseReducer);
  return (
    <div>
      {expenseList.length ? (
        expenseList.map((item) =>  <Card item={item} />)
      ) : (
        <div className="empty-list">
          <img
            src={require("../../assets/images/empty.png").default}
            alt="empty"
            className="empty-img"
          />
          <span>Uh, oh Your expense list is empty</span>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
