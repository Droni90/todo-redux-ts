import { ActionTypes } from "./types";

export const spinnerStop = (error: string) => {
  return {
    type: ActionTypes.GET_ERROR,
    error: error,
  };
};
