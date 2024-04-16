import { BookComponentProps } from "./components/books";

interface IAction {
  type: string;
  payload?: any;
}

interface BooksIState {
  currentBook: BookComponentProps | null;
  data: BookComponentProps | [];
  pending: boolean;
  error: any;
}

export type { IAction, BooksIState };
