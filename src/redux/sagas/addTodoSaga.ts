import { takeLatest, call, put, StrictEffect } from "redux-saga/effects";
import * as api from "../../utils/Api";
import * as todoActions from "../actions/group";
import { getError } from "../../components/errorHandler/actions";
import { spinnerStart, spinnerStop } from "../actions/totalActions";

function* addTodoSaga(): Generator<StrictEffect> {
  yield takeLatest(todoActions.addTodo, addTodo);
}

function* addTodo(action: any) {
  yield put(spinnerStart());
  try {
    const { data } = yield call(api.postTodo, action.payload, action.meta);
    yield put(todoActions.addTodoSuccess(data, +action.meta));
  } catch (err) {
    yield put(getError(err.message));
  } finally {
    yield put(spinnerStop());
  }
}
export default addTodoSaga;
