export interface GroupsState {
  group: any[];
}

export enum ActionGroupTypes {
  FETCH_GROUP_REQUEST = "FETCH_GROUP_REQUEST",
  FETCH_GROUP_SUCCESS = "FETCH_GROUP_SUCCESS",
  FETCH_GROUP_ERROR = "FETCH_GROUP_ERROR",
  REMOVE_GROUP = "REMOVE_GROUP",
  ADD_GROUP = "ADD_GROUP",
}
interface FetchGroupRequestAction {
  type: ActionGroupTypes.FETCH_GROUP_REQUEST;
}
interface FetchGroupSuccessAction {
  type: ActionGroupTypes.FETCH_GROUP_SUCCESS;
  payload: any[];
}
interface FetchGroupErrorAction {
  type: ActionGroupTypes.FETCH_GROUP_ERROR;
  payload: string;
}
interface AddGroup {
  type: ActionGroupTypes.ADD_GROUP;
  payload: any[];
}
interface RemoveGroupAction {
  type: ActionGroupTypes.REMOVE_GROUP;
  payload: number;
}
export type GroupAction =
  | FetchGroupRequestAction
  | FetchGroupSuccessAction
  | FetchGroupErrorAction
  | AddGroup
  | RemoveGroupAction;
