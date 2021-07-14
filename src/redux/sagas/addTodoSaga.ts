import { takeLatest, call, put, StrictEffect } from "redux-saga/effects";
import { ActionGroupTypes } from "../types/todo";
import * as api from "../../utils/Api";
import * as actions from "../actions/group";
import { spinnerStart, spinnerStop } from "../actions/totalActions";

function* addTodoSaga(): Generator<StrictEffect> {
  yield takeLatest(ActionGroupTypes.ADD_TODO, addTodo);
}

function* addTodo(action: any) {
  yield put(spinnerStart());
  try {
    const { data } = yield call(api.postTodo, action.payload, action.id);
    yield put(actions.addTodoSuccess(data, +action.id));
  } catch (err) {
    yield put(actions.addTodoFailure(err.message));
  } finally {
    yield put(spinnerStop());
  }
}
export default addTodoSaga;
