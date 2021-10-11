import { ADD_EXPENSE, DELETE_EXPENSE } from "../actions";

export const deleteExpense = (data) => {
  return {
    type: DELETE_EXPENSE,
    payload: data,
  };
};

export const addExpense = (data) => {
  console.log(data);
  return {
    type: ADD_EXPENSE,
    payload: data,
  };
};
