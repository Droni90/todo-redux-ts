import { takeLatest, call, put, StrictEffect } from "redux-saga/effects";
import { ActionGroupTypes } from "../types/todo";
import * as api from "../../utils/Api";
import * as actions from "../actions/group";
import { getError, clearError } from "../../components/errorHandler/actions";

import { spinnerStart, spinnerStop } from "../actions/totalActions";

function* addGroupSaga(): Generator<StrictEffect> {
  yield takeLatest(ActionGroupTypes.ADD_GROUP, addGroup);
}
function* addGroup(action: any) {
  yield put(spinnerStart());
  try {
    const { data } = yield call(api.postGroups, action.payload);
    yield put(actions.addGroupSuccess(data));
  } catch (err) {
    yield put(getError(err.message));
  } finally {
    yield put(spinnerStop());
  }
}
export default addGroupSaga;
