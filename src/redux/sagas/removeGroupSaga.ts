import { takeLatest, call, StrictEffect, put } from "redux-saga/effects";
import * as api from "../../utils/Api";
import * as todoGroupActions from "../actions/group";
import { spinnerStart, spinnerStop } from "../actions/totalActions";
import { getError } from "../../components/errorHandler/actions";
import { getType } from "typesafe-actions";

function* removeGroupSaga(): Generator<StrictEffect> {
  yield takeLatest(getType(todoGroupActions.removeGroup), removeGroup);
}
function* removeGroup(action: any) {
  yield put(spinnerStart());
  try {
    const { data } = yield call(api.removeGroup, { id: action.payload });
    yield put(todoGroupActions.removeGroupSuccess(data.id));
  } catch (err) {
    yield put(getError(err.message));
  } finally {
    yield put(spinnerStop());
  }
}
export default removeGroupSaga;
