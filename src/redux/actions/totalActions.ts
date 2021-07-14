import { ActionGroupTypes } from "../types/todo";

export const spinnerStart = () => {
  return {
    type: ActionGroupTypes.SPINNER_START,
    isLoading: true,
  };
};

export const spinnerStop = () => {
  return {
    type: ActionGroupTypes.SPINNER_STOP,
    isLoading: false,
  };
};
