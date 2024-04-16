import { combineReducers } from "redux";
import booksReducer from "./books";

export const combinedReducers = combineReducers({
  books: booksReducer,
});
