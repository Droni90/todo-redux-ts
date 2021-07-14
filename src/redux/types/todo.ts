import {
  IGroupCreateModel,
  IGroupModel,
  ITodoCreateModel,
  ITodoModel,
} from "../../interfaces";

export interface GroupsState {
  todoGroups: IGroupModel[];
  isLoading?: boolean;
  error?: string;
}

export enum ActionGroupTypes {
  LOAD_GROUPS = "LOAD_GROUPS",
  LOAD_GROUPS_SUCCESS = "LOAD_GROUPS_SUCCESS",
  LOAD_GROUPS_FAILURE = "LOAD_GROUPS_FAILURE",

  ADD_GROUP = "ADD_GROUP",
  ADD_GROUP_SUCCESS = "ADD_GROUP_SUCCESS",
  ADD_GROUP_FAILURE = "ADD_GROUP_FAILURE",

  REMOVE_GROUP = "REMOVE_GROUP",
  REMOVE_GROUP_SUCCESS = "REMOVE_GROUP_SUCCESS",
  REMOVE_GROUP_FAILURE = "REMOVE_GROUP_FAILURE",

  LOAD_TODOS = "LOAD_TODOS",
  LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS",
  LOAD_TODOS_FAILURE = "LOAD_TODOS_FAILURE",

  ADD_TODO = "ADD_TODO",
  ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS",
  ADD_TODO_FAILURE = "ADD_TODO_FAILURE",

  REMOVE_TODO = "REMOVE_TODO",
  REMOVE_TODO_SUCCESS = "REMOVE_TODO_SUCCESS",
  REMOVE_TODO_FAILURE = "REMOVE_TODO_FAILURE",

  COMPLETE_TODO = "COMPLETE_TODO",
  COMPLETE_TODO_SUCCESS = "COMPLETE_TODO_SUCCESS",
  COMPLETE_TODO_FAILURE = "COMPLETE_TODO_FAILURE",

  SPINNER_START = "SPINNER_START",
  SPINNER_STOP = "SPINNER_STOP",
}

interface LoadGroups {
  type: ActionGroupTypes.LOAD_GROUPS;
  isLoading: boolean;
}

interface LoadGroupsSuccessAction {
  type: ActionGroupTypes.LOAD_GROUPS_SUCCESS;
  payload: [];
  isLoading: boolean;
}

interface LoadGroupsFailure {
  type: ActionGroupTypes.LOAD_GROUPS_FAILURE;
  isLoading: boolean;
  error: string;
}

interface AddGroupAction {
  type: ActionGroupTypes.ADD_GROUP;
  payload: IGroupCreateModel;
  isLoading: boolean;
}
interface AddGroupSuccessAction {
  type: ActionGroupTypes.ADD_GROUP_SUCCESS;
  payload: IGroupModel;
  isLoading: boolean;
}
interface AddGroupFailureAction {
  type: ActionGroupTypes.ADD_GROUP_FAILURE;
  isLoading: boolean;
  error: string;
}

interface RemoveGroupAction {
  type: ActionGroupTypes.REMOVE_GROUP;
  id: number;
  isLoading: boolean;
}
interface RemoveGroupSuccessAction {
  type: ActionGroupTypes.REMOVE_GROUP_SUCCESS;
  id: number;
  isLoading: boolean;
}
interface RemoveGroupFailureAction {
  type: ActionGroupTypes.REMOVE_GROUP_FAILURE;
  id: boolean;
  error: string;
}

interface LoadTodosAction {
  type: ActionGroupTypes.LOAD_TODOS;
  payload: number;
  isLoading: boolean;
}
interface LoadTodosSuccessAction {
  type: ActionGroupTypes.LOAD_TODOS_SUCCESS;
  groupId: number;
  payload: [];
  isLoading: boolean;
}

interface LoadTodosFailureAction {
  type: ActionGroupTypes.LOAD_TODOS_FAILURE;
  error: string;
  isLoading: boolean;
}

interface AddTodoAction {
  type: ActionGroupTypes.ADD_TODO;
  payload: ITodoCreateModel;
  id: number;
  isLoading: boolean;
}
interface AddTodoSuccessAction {
  type: ActionGroupTypes.ADD_TODO_SUCCESS;
  payload: ITodoModel;
  groupId: number;
  isLoading: boolean;
}
interface AddTodoFailureAction {
  type: ActionGroupTypes.ADD_TODO_FAILURE;
  error: string;
  isLoading: boolean;
}

interface RemoveTodoAction {
  type: ActionGroupTypes.REMOVE_TODO;
  todoId: number;
  groupId: number;
  isLoading: boolean;
}
interface RemoveTodoSuccessAction {
  type: ActionGroupTypes.REMOVE_TODO_SUCCESS;
  isLoading: boolean;
  groupId: number;
  todoId: number;
  success: string;
}
interface RemoveTodoFailureAction {
  type: ActionGroupTypes.REMOVE_TODO_FAILURE;
  error: string;
  isLoading: boolean;
}

interface CompleteTodoAction {
  type: ActionGroupTypes.COMPLETE_TODO;
  todoId: number;
  isLoading: boolean;
}
interface CompleteTodoSuccessAction {
  type: ActionGroupTypes.COMPLETE_TODO_SUCCESS;
  id: number;
  isLoading: boolean;
}

interface CompleteTodoFailureAction {
  type: ActionGroupTypes.COMPLETE_TODO_FAILURE;
  error: string;
  isLoading: boolean;
}

interface SpinnerStartAction {
  type: ActionGroupTypes.SPINNER_START;
  isLoading: boolean;
}

interface SpinnerStopAction {
  type: ActionGroupTypes.SPINNER_STOP;
  isLoading: boolean;
}

export type GroupAction =
  | LoadGroups
  | LoadGroupsSuccessAction
  | LoadGroupsFailure
  | AddGroupAction
  | AddGroupSuccessAction
  | AddGroupFailureAction
  | RemoveGroupAction
  | RemoveGroupSuccessAction
  | RemoveGroupFailureAction
  | LoadTodosAction
  | LoadTodosSuccessAction
  | LoadTodosFailureAction
  | AddTodoAction
  | AddTodoSuccessAction
  | AddTodoFailureAction
  | RemoveTodoAction
  | RemoveTodoSuccessAction
  | RemoveTodoFailureAction
  | CompleteTodoAction
  | CompleteTodoSuccessAction
  | CompleteTodoFailureAction
  | SpinnerStartAction
  | SpinnerStopAction;
