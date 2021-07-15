export interface IGroupModel {
  groupName: string;
  id: number;
  todoItems?: ITodoModel[];
  totalCount: number;
  completedCount: number;
}

export interface IGroupCreateModel {
  groupName: string;
}

export interface ITodoModel {
  todoName: string;
  id: number;
  isCompleted: boolean;
}

export interface ITodoCreateModel {
  todoName: string;
  isCompleted: boolean;
}

export interface GroupsState {
  todoGroups: IGroupModel[];
  isLoading?: boolean;
  error?: string;
}
