import { call, put, delay, takeLatest } from "redux-saga/effects";
import { parseBook, parseBooksData } from "../../helpers/books";
import { getAuthor, getBook, searchBooks } from "../../services/books";
import * as actions from "../actions/books";
import * as types from "../actions/types";

function* searchBooksRequest({ data: query }) {
  try {
    yield delay(2000);

    // @ts-ignore
    const response = yield call(searchBooks, query);

    if (!response.error) {
      const books = parseBooksData(response.docs);
      yield put(
        actions.searchBooksSuccess({
          ...response,
          data: books,
        })
      );
    } else {
      yield put(actions.searchBooksFailure(response.error));
    }
  } catch (e) {
    yield put(actions.searchBooksFailure(e));
  }
}
function* getBookRequest({ data }) {
  try {
    // @ts-ignore
    const bookResponse = yield call(getBook, data.key);

    // @ts-ignore
    const authorResponse = yield call(
      getAuthor,
      bookResponse.authors[0].author.key
    );

    const book = parseBook(authorResponse, bookResponse);
    yield put(actions.getBookSuccess(book));
  } catch (e) {
    yield put(actions.getBookFailure(e));
  }
}

export default function* booksSaga() {
  yield takeLatest(types.SEARCH_BOOKS_REQUEST, searchBooksRequest);
  yield takeLatest(types.GET_BOOK_REQUEST, getBookRequest);
}
