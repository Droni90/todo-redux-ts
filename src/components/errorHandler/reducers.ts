import * as errorHandler from "./actions";
import { getType } from "typesafe-actions";

const initialState = {
  error: "",
};

export const errors = (state = initialState, action: any) => {
  switch (action.type) {
    case getType(errorHandler.getError):
      return { ...state, error: action.payload };

    case getType(errorHandler.clearError):
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
