import { takeLatest, put, call, StrictEffect } from "redux-saga/effects";
import { ActionGroupTypes } from "../types/todo";
import * as api from "../../utils/Api";
import * as actions from "../actions/group";
import { spinnerStart, spinnerStop } from "../actions/totalActions";
import { getError } from "../../components/errorHandler/actions";

export function* loadGroupsSaga(): Generator<StrictEffect> {
  yield takeLatest(ActionGroupTypes.LOAD_GROUPS, loadGroups);
}

function* loadGroups() {
  yield put(spinnerStart());
  try {
    const { data } = yield call(api.getGroups);
    yield put(actions.loadGroupsSuccess(data));
  } catch (err) {
    yield put(getError(err.message));
  } finally {
    yield put(spinnerStop());
  }
}

export default loadGroupsSaga;
