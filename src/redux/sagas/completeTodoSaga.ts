import { takeLatest, call, put, StrictEffect } from "redux-saga/effects";
import { ActionGroupTypes } from "../types/todo";
import * as api from "../../utils/Api";
import * as actions from "../actions/group";
import { spinnerStart, spinnerStop } from "../actions/totalActions";
import { getError } from "../../components/errorHandler/actions";

function* completeTodoSaga(): Generator<StrictEffect> {
  yield takeLatest(ActionGroupTypes.COMPLETE_TODO, completeTodo);
}
function* completeTodo(action: any) {
  yield put(spinnerStart());
  try {
    const { data } = yield call(api.completeTodo, action.todoId);
    yield put(actions.completeTodoSuccess(data.id));
  } catch (err) {
    yield put(getError(err.message));
  } finally {
    yield put(spinnerStop());
  }
}
export default completeTodoSaga;
