import * as types from "../actions/types";
import { BooksIState, IAction } from "../../interfaces/store";

const initialState: BooksIState = {
  currentBook: null,
  data: [],
  pending: false,
  error: null,
};

const booksReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case types.SEARCH_BOOKS_REQUEST: {
      return {
        ...state,
        pending: true,
        error: false,
      };
    }
    case types.GET_BOOK_REQUEST: {
      return { ...state, pending: true, error: false, currentBook: null };
    }
    case types.SEARCH_BOOKS_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        pending: false,
        error: false,
      };
    }
    case types.GET_BOOK_SUCCESS: {
      return {
        ...state,
        currentBook: action.payload,
        pending: false,
        error: false,
      };
    }
    case types.SEARCH_BOOKS_FAILURE: {
      return {
        ...state,
        data: null,
        pending: false,
        error: true,
      };
    }
    case types.GET_BOOK_FAILURE: {
      return {
        ...state,
        pending: false,
        error: true,
        currentBook: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default booksReducer;
