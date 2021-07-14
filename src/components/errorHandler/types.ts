export interface IErrors {
  error: string;
}
export enum ActionTypes {
  GET_ERROR = "GET_ERROR",
}

interface GetErrorAction {
  type: ActionTypes.GET_ERROR;
  error: string;
}

export type GroupAction = GetErrorAction;
