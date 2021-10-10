import { createStore, combineReducers } from "redux";

import { expenseReducer } from "./reducers";

const intialState = {}

const reducer = combineReducers({expenseReducer})

export const store = createStore(reducer,intialState)
