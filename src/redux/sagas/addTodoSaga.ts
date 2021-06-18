import { takeLatest, call, StrictEffect } from "redux-saga/effects";
import { ActionGroupTypes } from "../types/todo";
import * as api from "../../utils/Api";

function* addTodoSaga(): Generator<StrictEffect> {
  yield takeLatest(ActionGroupTypes.ADD_TODO, addTodoWorker);
}

function* addTodoWorker(action: any) {
  console.log(action.payload);
  try {
    yield call(api.postTodo, action.payload, action.id);
  } catch (err) {
    console.log(err);
  }
}
export default addTodoSaga;
