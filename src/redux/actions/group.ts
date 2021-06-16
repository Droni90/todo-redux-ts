import { ActionGroupTypes } from "../types/todo";
import { ITodoList } from "../../interfaces";

export const fetchGroups = (group: ITodoList) => {
  return { type: ActionGroupTypes.ADD_GROUP, payload: group };
};

export const removeGroup = (id: number) => {
  return { type: ActionGroupTypes.REMOVE_GROUP, payload: id };
};
