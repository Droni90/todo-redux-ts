import { takeLatest, call, StrictEffect } from "redux-saga/effects";
import { ActionGroupTypes } from "../types/todo";
import * as api from "../../utils/Api";

function* removeTodoSaga(): Generator<StrictEffect> {
  yield takeLatest(ActionGroupTypes.REMOVE_TODO, removeTodoWorker);
}
function* removeTodoWorker(action: any) {
  try {
    yield call(api.removeGroup, {
      todoId: action.todoId,
      groupId: action.groupId,
    });
  } catch (err) {
    console.log(err);
  }
}
export default removeTodoSaga;
