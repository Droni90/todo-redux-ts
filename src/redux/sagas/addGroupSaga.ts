import { takeLatest, call, StrictEffect } from "redux-saga/effects";
import { ActionGroupTypes } from "../types/todo";
import * as api from "../../utils/Api";

function* addGroupSaga(): Generator<StrictEffect> {
  yield takeLatest(ActionGroupTypes.ADD_GROUP, addGroupWorker);
}
function* addGroupWorker(action: any) {
  try {
    yield call(api.postGroups, action.payload);
  } catch (err) {
    console.log(err);
  }
}
export default addGroupSaga;
