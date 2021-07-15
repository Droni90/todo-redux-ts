import { takeLatest, call, StrictEffect, put } from "redux-saga/effects";
import { ActionGroupTypes } from "../types/todo";
import * as api from "../../utils/Api";
import * as actions from "../actions/group";
import { spinnerStart, spinnerStop } from "../actions/totalActions";
import { getError } from "../../components/errorHandler/actions";

function* removeGroupSaga(): Generator<StrictEffect> {
  yield takeLatest(ActionGroupTypes.REMOVE_GROUP, removeGroup);
}
function* removeGroup(action: any) {
  yield put(spinnerStart());
  try {
    const { data } = yield call(api.removeGroup, { id: action.payload });
    yield put(actions.removeGroupSuccess(data.id));
  } catch (err) {
    yield put(getError(err.message));
  } finally {
    yield put(spinnerStop());
  }
}
export default removeGroupSaga;
