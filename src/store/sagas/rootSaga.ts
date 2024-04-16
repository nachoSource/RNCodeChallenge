import { all } from "redux-saga/effects";
import booksSaga from "./books";

function* rootSaga() {
  yield all([booksSaga()]);
}

export default rootSaga;
