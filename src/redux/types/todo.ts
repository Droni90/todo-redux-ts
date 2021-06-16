export interface GroupsState {
  groups: any[];
}

export enum ActionGroupTypes {
  FETCH_GROUP_REQUEST = "FETCH_GROUP_REQUEST",
  FETCH_GROUP_SUCCESS = "FETCH_GROUP_SUCCESS",
  FETCH_GROUP_ERROR = "FETCH_GROUP_ERROR",
  REMOVE_GROUP = "REMOVE_GROUP",
  ADD_GROUP = "ADD_GROUP",
  ADD_TODO = "ADD_TODO",
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
interface AddGroupAction {
  type: ActionGroupTypes.ADD_GROUP;
  payload: any[];
}
interface RemoveGroupAction {
  type: ActionGroupTypes.REMOVE_GROUP;
  payload: number;
}

interface AddTodoAction {
  type: ActionGroupTypes.ADD_TODO;
  payload: [];
  id: number;
}

export type GroupAction =
  | FetchGroupRequestAction
  | FetchGroupSuccessAction
  | FetchGroupErrorAction
  | AddGroupAction
  | RemoveGroupAction
  | AddTodoAction;
