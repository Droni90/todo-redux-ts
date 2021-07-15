import { takeLatest, put, call, StrictEffect } from "redux-saga/effects";
import * as api from "../../utils/Api";
import * as todoActions from "../actions/group";
import { spinnerStart, spinnerStop } from "../actions/totalActions";
import { getError } from "../../components/errorHandler/actions";
import { getType } from "typesafe-actions";

export function* loadTodosSaga(): Generator<StrictEffect> {
  yield takeLatest(getType(todoActions.loadTodos), loadTodos);
}

function* loadTodos(action: any) {
  yield put(spinnerStart());
  try {
    const { data } = yield call(api.getTodos, action.payload);
    console.log(action);

    yield put(todoActions.loadTodosSuccess(data, action.payload));
  } catch (err) {
    yield put(getError(err.message));
  } finally {
    yield put(spinnerStop());
  }
}

export default loadTodosSaga;
