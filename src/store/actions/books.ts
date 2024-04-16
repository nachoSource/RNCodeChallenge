import { BookComponentProps } from "../../interfaces/components/books";
import * as types from "./types";

export const searchBooksRequest = (data: any) => ({
  type: types.SEARCH_BOOKS_REQUEST,
  payload: data,
});

export const getBookRequest = (data: string) => {
  return {
    type: types.GET_BOOK_REQUEST,
    payload: data,
  };
};

export const searchBooksSuccess = (data: any) => ({
  type: types.SEARCH_BOOKS_SUCCESS,
  payload: data,
});

export const getBookSuccess = (data: BookComponentProps | any) => {
  return {
    type: types.GET_BOOK_SUCCESS,
    payload: data,
  };
};

export const searchBooksFailure = (e: any) => {
  return {
    type: types.SEARCH_BOOKS_FAILURE,
    payload: e,
  };
};

export const getBookFailure = (e: any) => {
  return {
    type: types.GET_BOOK_FAILURE,
    payload: e,
  };
};
