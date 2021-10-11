import { ADD_EXPENSE, DELETE_EXPENSE } from "../action-creators";

export const deleteExpense = (data) => {
  return {
    type: DELETE_EXPENSE,
    payload: data,
  };
};

export const addExpense = (data) => {
  return {
    type: ADD_EXPENSE,
    payload: data,
  };
};
