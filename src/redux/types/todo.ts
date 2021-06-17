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
  REMOVE_TODO = "REMOVE_TODO",
  CHECK_TODO = "CHECK_TODO",
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
interface RemoveTodoAction {
  type: ActionGroupTypes.REMOVE_TODO;
  groupId: number;
  todoId: number;
}
interface CheckTodo {
  type: ActionGroupTypes.CHECK_TODO;
  groupId: number;
  todoId: number;
}

export type GroupAction =
  | FetchGroupRequestAction
  | FetchGroupSuccessAction
  | FetchGroupErrorAction
  | AddGroupAction
  | RemoveGroupAction
  | AddTodoAction
  | RemoveTodoAction
  | CheckTodo;
