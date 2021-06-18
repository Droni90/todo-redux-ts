import axios from "axios";
import { IGroupList, ITodoList } from "../interfaces";

export const getGroups = () => {
  return axios.get("http://localhost:3000/groups");
};
export const postGroups = (group: IGroupList) => {
  return axios.post("http://localhost:3000/groups/", group);
};

export const removeGroup = (id: any) => {
  return axios.delete(`http://localhost:3000/groups/${id.id}`, id);
};

export const postTodo = (todos: ITodoList, id: number) => {
  return axios.post(`http://localhost:3000/groups/${id}/todos`, todos);
};

export const removeTodo = (todoId: any, groupId: any) => {
  return axios.delete(
    `http://localhost:3000/groups/${groupId.id}/todos/${todoId.id}`,
    todoId
  );
};
