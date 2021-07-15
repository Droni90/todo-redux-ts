import { ActionGroupTypes } from "../types/todo";
import { IGroupCreateModel, ITodoCreateModel } from "../../interfaces";

export const loadGroups = () => {
  return {
    type: ActionGroupTypes.LOAD_GROUPS,
  };
};
export const loadGroupsSuccess = (groups: any) => {
  return { type: ActionGroupTypes.LOAD_GROUPS_SUCCESS, payload: groups };
};

export const addGroup = (group: IGroupCreateModel) => {
  return { type: ActionGroupTypes.ADD_GROUP, payload: group };
};
export const addGroupSuccess = (group: IGroupCreateModel) => {
  return {
    type: ActionGroupTypes.ADD_GROUP_SUCCESS,
    payload: group,
  };
};

export const removeGroup = (id: number) => {
  return { type: ActionGroupTypes.REMOVE_GROUP, payload: id };
};
export const removeGroupSuccess = (id: number) => {
  return { type: ActionGroupTypes.REMOVE_GROUP_SUCCESS, id };
};

export const loadTodos = (groupId: number) => {
  return {
    type: ActionGroupTypes.LOAD_TODOS,
    payload: groupId,
  };
};
export const loadTodosSuccess = (todos: any, id: number) => {
  return {
    type: ActionGroupTypes.LOAD_TODOS_SUCCESS,
    payload: todos,
    groupId: id,
  };
};

export const addTodo = (todo: ITodoCreateModel, id: number) => {
  return {
    type: ActionGroupTypes.ADD_TODO,
    payload: todo,
    id,
  };
};
export const addTodoSuccess = (todo: ITodoCreateModel, id: number) => {
  return {
    type: ActionGroupTypes.ADD_TODO_SUCCESS,
    payload: todo,
    groupId: id,
  };
};

export const removeTodo = (todoId: number, groupId: number) => {
  return {
    type: ActionGroupTypes.REMOVE_TODO,
    todoId,
    groupId,
  };
};
export const removeTodoSuccess = (todoId: number, groupId: number) => {
  return {
    type: ActionGroupTypes.REMOVE_TODO_SUCCESS,
    todoId,
    groupId,
  };
};

export const completeTodo = (todoId: number) => {
  return {
    type: ActionGroupTypes.COMPLETE_TODO,
    todoId: todoId,
  };
};
export const completeTodoSuccess = (id: number) => {
  return { type: ActionGroupTypes.COMPLETE_TODO_SUCCESS, id };
};
