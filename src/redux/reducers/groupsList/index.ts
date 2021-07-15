import { GroupsState, ITodoModel } from "../../../interfaces";
import * as actions from "../../actions/group";
import { getType } from "typesafe-actions";
import { spinnerStart, spinnerStop } from "../../actions/totalActions";

const initialState: GroupsState = {
  todoGroups: [],
};

export const groupsList = (
  state: GroupsState = initialState,
  action: any
): GroupsState => {
  let newGroups;
  switch (action.type) {
    case getType(actions.loadGroupsSuccess):
      return {
        ...state,
        todoGroups: action.payload,
        error: "",
      };

    case getType(actions.addGroupSuccess):
      return {
        ...state,
        todoGroups: [...state.todoGroups, action.payload],
        error: "",
      };

    case getType(actions.removeGroupSuccess):
      newGroups = state.todoGroups.filter(
        (group) => group.id !== action.payload
      );
      return { ...state, todoGroups: newGroups, error: "" };

    case getType(actions.loadTodosSuccess):
      console.log(actions);
      newGroups = state.todoGroups.map((item) => {
        if (item.id === action.meta) {
          item.todoItems = action.payload;
        }
        return item;
      });
      return {
        ...state,
        todoGroups: newGroups,
        error: "",
      };

    case getType(actions.addTodoSuccess):
      newGroups = state.todoGroups.map((item) => {
        if (item.id === action.meta) {
          item.todoItems?.push(action.payload);
          item.totalCount += 1;
        }
        return item;
      });
      return { ...state, todoGroups: newGroups, error: "" };

    case getType(actions.removeTodoSuccess):
      newGroups = [...state.todoGroups].map((item) => {
        if (item.id === action.meta) {
          console.log("sss");
          item.totalCount -= 1;
          item.todoItems?.forEach((todo) => {
            if (todo.id === action.payload && todo.isCompleted) {
              item.completedCount -= 1;
            }
          });
        }
        item.todoItems = item.todoItems?.filter(
          (todo: ITodoModel) => todo.id !== action.payload
        );
        return item;
      });
      return { ...state, todoGroups: newGroups, error: "" };

    case getType(actions.completeTodoSuccess):
      newGroups = [...state.todoGroups].map((item) => {
        item.todoItems?.forEach((todo: ITodoModel) => {
          if (todo.id === action.payload) {
            todo.isCompleted = !todo.isCompleted;
            todo.isCompleted
              ? (item.completedCount += 1)
              : (item.completedCount -= 1);
          }
        });
        return item;
      });
      return { ...state, todoGroups: newGroups, error: "" };

    case getType(spinnerStart):
      return { ...state, isLoading: true };

    case getType(spinnerStop):
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
