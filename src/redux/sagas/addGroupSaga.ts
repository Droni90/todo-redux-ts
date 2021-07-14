import { takeLatest, call, put, StrictEffect } from "redux-saga/effects";
import { ActionGroupTypes } from "../types/todo";
import * as api from "../../utils/Api";
import * as actions from "../actions/group";
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
    yield put(actions.addGroupFailure(err.message));
  } finally {
    yield put(spinnerStop());
  }
}
export default addGroupSaga;
