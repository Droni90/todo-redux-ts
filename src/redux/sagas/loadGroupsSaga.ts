import { takeLatest, put, call, StrictEffect } from "redux-saga/effects";
import { ActionGroupTypes } from "../types/todo";
import * as api from "../../utils/Api";
import { setGroups } from "../actions/group";

export function* loadGroupsSaga(): Generator<StrictEffect> {
  yield takeLatest(ActionGroupTypes.LOAD_GROUPS, loadGroupsWorker);
}

function* loadGroupsWorker() {
  try {
    const { data } = yield call(api.getGroups);
    console.log(data);
    yield put(setGroups(data));
  } catch (err) {
    console.log(err);
  }
}

export default loadGroupsSaga;
