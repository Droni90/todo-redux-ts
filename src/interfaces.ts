export interface IGroupList {
  groupName: string;
  id: number;
  todos: any[];
  currentId?: number;
}
export interface ITodoList {
  todoName: string;
  id: number;
  completed?: boolean;
}
