import { ADD_EXPENSE } from "../actions";

const initialState = {
  expenseList: [],
};

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_EXPENSE:
          return {...state, expenseList:[...state.expenseList,action.payload]}
    default:
      return state;
  }
};
