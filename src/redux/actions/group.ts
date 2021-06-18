import { ActionGroupTypes } from "../types/todo";
import { IGroupList, ITodoList } from "../../interfaces";

export const loadGroups = () => {
  return {
    type: ActionGroupTypes.LOAD_GROUPS,
  };
};
export const setGroups = (groups: any) => {
  return { type: ActionGroupTypes.SET_GROUPS, payload: groups };
};

export const addGroup = (group: IGroupList) => {
  return { type: ActionGroupTypes.ADD_GROUP, payload: group };
};

export const removeGroup = (id: number) => {
  return { type: ActionGroupTypes.REMOVE_GROUP, payload: id };
};

export const addTodo = (todo: ITodoList, id: number) => {
  return { type: ActionGroupTypes.ADD_TODO, payload: todo, id };
};

export const removeTodo = (todoId: number, groupId: number) => {
  return {
    type: ActionGroupTypes.REMOVE_TODO,
    groupId: groupId,
    todoId: todoId,
  };
};

export const checkTodo = (todoId: number, groupId: number) => {
  return {
    type: ActionGroupTypes.CHECK_TODO,
    groupId: groupId,
    todoId: todoId,
  };
};
