import { takeLatest, put, call, StrictEffect } from "redux-saga/effects";
import { ActionGroupTypes } from "../types/todo";
import * as api from "../../utils/Api";
import * as actions from "../actions/group";
import { spinnerStart, spinnerStop } from "../actions/totalActions";

function* removeTodoSaga(): Generator<StrictEffect> {
  yield takeLatest(ActionGroupTypes.REMOVE_TODO, removeTodo);
}
function* removeTodo(action: any) {
  yield put(spinnerStart());
  try {
    const { data } = yield call(api.removeTodo, action.todoId);
    yield put(actions.removeTodoSuccess(data.id, action.groupId));
  } catch (err) {
    yield put(actions.removeTodoFailure(err.message));
  } finally {
    yield put(spinnerStop());
  }
}
export default removeTodoSaga;
