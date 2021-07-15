import { ActionTypes } from "./types";

export const getError = (error: string) => {
  return {
    type: ActionTypes.GET_ERROR,
    error: error,
  };
};

export const clearError = () => {
  return {
    type: ActionTypes.CLEAR_ERROR,
    error: "",
  };
};
