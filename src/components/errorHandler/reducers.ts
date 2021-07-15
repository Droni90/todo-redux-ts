import { ActionTypes, IErrors, GroupAction } from "./types";

const initialState: IErrors = {
  error: "",
};

export const errors = (
  state: IErrors = initialState,
  action: GroupAction
): IErrors => {
  switch (action.type) {
    case ActionTypes.GET_ERROR:
      return { ...state, error: action.error };
    case ActionTypes.CLEAR_ERROR:
      return { ...state, error: "" };

    default:
      return state;
  }
};
