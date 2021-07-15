import { takeLatest, put, call, StrictEffect } from "redux-saga/effects";
import * as api from "../../utils/Api";
import * as todoActions from "../actions/group";
import { spinnerStart, spinnerStop } from "../actions/totalActions";
import { getError } from "../../components/errorHandler/actions";
import { getType } from "typesafe-actions";

function* removeTodoSaga(): Generator<StrictEffect> {
  yield takeLatest(getType(todoActions.removeTodo), removeTodo);
}
function* removeTodo(action: any) {
  yield put(spinnerStart());
  try {
    const { data } = yield call(api.removeTodo, action.payload);
    yield put(todoActions.removeTodoSuccess(data.id, action.meta));
  } catch (err) {
    yield put(getError(err.message));
  } finally {
    yield put(spinnerStop());
  }
}
export default removeTodoSaga;
