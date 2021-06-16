import { combineReducers } from "redux";
import { groupsList } from "./groupsList";

export const rootReducer = combineReducers({
  groupsList,
});

export type RootState = ReturnType<typeof rootReducer>;
