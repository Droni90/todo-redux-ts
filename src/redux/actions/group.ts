import {
  IGroupCreateModel,
  IGroupModel,
  ITodoCreateModel,
  ITodoModel,
} from "../../interfaces";
import { createAction } from "typesafe-actions";

export const loadGroups = createAction("todoGroup/LOAD_GROUPS")();

export const loadGroupsSuccess = createAction(
  "todoGroup/LOAD_GROUPS_SUCCESS"
)<IGroupModel>();

export const addGroup = createAction(
  "todoGroup/ADD_GROUP"
)<IGroupCreateModel>();

export const addGroupSuccess = createAction(
  "todoGroup/ADD_GROUP_SUCCESS"
)<IGroupCreateModel>();

export const removeGroup = createAction("todoGroup/REMOVE_GROUP")<number>();

export const removeGroupSuccess = createAction(
  "todoGroup/REMOVE_GROUP_SUCCESS"
)<number>();

export const loadTodos = createAction("todoGroup/LOAD_TODOS")<number>();

export const loadTodosSuccess = createAction("todoGroup/LOAD_TODOS_SUCCESS")<
  ITodoModel,
  number
>();

export const addTodo = createAction("todoGroup/ADD_TODO")<
  ITodoCreateModel,
  number
>();

export const addTodoSuccess = createAction("todoGroup/ADD_TODO_SUCCESS")<
  ITodoCreateModel,
  number
>();

export const removeTodo = createAction("todoGroup/REMOVE_TODO")<
  number,
  number
>();

export const removeTodoSuccess = createAction("todoGroup/REMOVE_TODO_SUCCESS")<
  number,
  number
>();

export const completeTodo = createAction("todoGroup/COMPLETE_TODO")<number>();

export const completeTodoSuccess = createAction(
  "todoGroup/COMPLETE_TODO_SUCCESS"
)<number>();
