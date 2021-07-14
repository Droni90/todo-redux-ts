import { takeLatest, put, call, StrictEffect } from "redux-saga/effects";
import { ActionGroupTypes } from "../types/todo";
import * as api from "../../utils/Api";
import * as actions from "../actions/group";
import { spinnerStart, spinnerStop } from "../actions/totalActions";

export function* loadTodosSaga(): Generator<StrictEffect> {
  yield takeLatest(ActionGroupTypes.LOAD_TODOS, loadTodos);
}

function* loadTodos(action: any) {
  yield put(spinnerStart());
  try {
    const { data } = yield call(api.getTodos, action.payload);
    yield put(actions.loadTodosSuccess(data, action.payload));
  } catch (err) {
    yield put(actions.loadTodosFailure(err.message));
  } finally {
    yield put(spinnerStop());
  }
}

export default loadTodosSaga;
