import { takeLatest, call, StrictEffect } from "redux-saga/effects";
import { ActionGroupTypes } from "../types/todo";
import * as api from "../../utils/Api";

function* removeGroupSaga(): Generator<StrictEffect> {
  yield takeLatest(ActionGroupTypes.REMOVE_GROUP, removeGroupWorker);
}
function* removeGroupWorker(action: any) {
  try {
    yield call(api.removeGroup, { id: action.payload });
  } catch (err) {
    console.log(err);
  }
}
export default removeGroupSaga;
