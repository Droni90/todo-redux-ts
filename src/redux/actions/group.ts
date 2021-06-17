import { ActionGroupTypes } from "../types/todo";
import { ITodoList } from "../../interfaces";

export const fetchGroups = (group: ITodoList) => {
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
