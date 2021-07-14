import { ActionGroupTypes, GroupAction, GroupsState } from "../../types/todo";
import { ITodoModel } from "../../../interfaces";

const initialState: GroupsState = {
  todoGroups: [],
};

export const groupsList = (
  state: GroupsState = initialState,
  action: GroupAction
): GroupsState => {
  let newGroups;
  switch (action.type) {
    case ActionGroupTypes.LOAD_GROUPS_SUCCESS:
      return {
        ...state,
        todoGroups: action.payload,
        error: "",
      };

    case ActionGroupTypes.LOAD_GROUPS_FAILURE:
      return { ...state, error: action.error };

    case ActionGroupTypes.ADD_GROUP_SUCCESS:
      return {
        ...state,
        todoGroups: [...state.todoGroups, action.payload],
        error: "",
      };
    case ActionGroupTypes.ADD_GROUP_FAILURE:
      return { ...state, error: action.error };

    case ActionGroupTypes.REMOVE_GROUP_SUCCESS:
      newGroups = state.todoGroups.filter((group) => group.id !== action.id);
      return { ...state, todoGroups: newGroups, error: "" };
    case ActionGroupTypes.REMOVE_GROUP_FAILURE:
      return { ...state, error: action.error };

    case ActionGroupTypes.LOAD_TODOS_SUCCESS:
      newGroups = state.todoGroups.map((item) => {
        if (item.id === action.groupId) {
          item.todoItems = action.payload;
        }
        return item;
      });
      return {
        ...state,
        todoGroups: newGroups,
        error: "",
      };
    case ActionGroupTypes.LOAD_TODOS_FAILURE:
      return { ...state, error: action.error };

    case ActionGroupTypes.ADD_TODO_SUCCESS:
      newGroups = state.todoGroups.map((item) => {
        if (item.id === action.groupId) {
          item.todoItems?.push(action.payload);
          item.totalCount += 1;
        }
        return item;
      });
      return { ...state, todoGroups: newGroups, error: "" };
    case ActionGroupTypes.ADD_TODO_FAILURE:
      return { ...state, error: action.error };

    case ActionGroupTypes.REMOVE_TODO_SUCCESS:
      newGroups = [...state.todoGroups].map((item) => {
        if (item.id === action.groupId) {
          item.totalCount -= 1;
          item.todoItems?.forEach((todo) => {
            if (todo.id === action.todoId && todo.isCompleted) {
              item.completedCount -= 1;
            }
          });
        }
        item.todoItems = item.todoItems?.filter(
          (todo: ITodoModel) => todo.id !== action.todoId
        );
        return item;
      });
      return { ...state, todoGroups: newGroups, error: "" };
    case ActionGroupTypes.REMOVE_TODO_FAILURE:
      return { ...state, error: action.error };

    case ActionGroupTypes.COMPLETE_TODO_SUCCESS:
      newGroups = [...state.todoGroups].map((item) => {
        item.todoItems?.forEach((todo: ITodoModel) => {
          if (todo.id === action.id) {
            todo.isCompleted = !todo.isCompleted;
            todo.isCompleted
              ? (item.completedCount += 1)
              : (item.completedCount -= 1);
          }
        });
        return item;
      });
      return { ...state, todoGroups: newGroups, error: "" };
    case ActionGroupTypes.COMPLETE_TODO_FAILURE:
      return { ...state, error: action.error };

    case ActionGroupTypes.SPINNER_START:
      return { ...state, isLoading: true };

    case ActionGroupTypes.SPINNER_STOP:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
