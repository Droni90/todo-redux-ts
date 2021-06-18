export interface GroupsState {
  groups: any[];
}

export enum ActionGroupTypes {
  SET_GROUPS = "SET_GROUPS",
  REMOVE_GROUP = "REMOVE_GROUP",
  ADD_GROUP = "ADD_GROUP",
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  CHECK_TODO = "CHECK_TODO",
  LOAD_GROUPS = "LOAD_GROUPS",
}
interface SetGroupsAction {
  type: ActionGroupTypes.SET_GROUPS;
  payload: [];
}
interface AddGroupAction {
  type: ActionGroupTypes.ADD_GROUP;
  payload: any;
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
interface LoadGroups {
  type: ActionGroupTypes.LOAD_GROUPS;
}

export type GroupAction =
  | SetGroupsAction
  | AddGroupAction
  | RemoveGroupAction
  | AddTodoAction
  | RemoveTodoAction
  | CheckTodo
  | LoadGroups;
