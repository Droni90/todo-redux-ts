import { ActionGroupTypes, GroupAction, GroupsState } from "../../types/todo";

const initialState: GroupsState = {
  groups: [],
};

export const groupsList = (
  state: GroupsState = initialState,
  action: GroupAction
): GroupsState => {
  let newGroups;
  switch (action.type) {
    case ActionGroupTypes.ADD_GROUP:
      newGroups = [...state.groups];
      newGroups.push(action.payload);
      return { groups: newGroups };

    case ActionGroupTypes.REMOVE_GROUP:
      newGroups = state.groups.filter((group) => group.id !== action.payload);
      return { groups: newGroups };

    case ActionGroupTypes.ADD_TODO:
      newGroups = [...state.groups].map((item) => {
        if (item.id === +action.id) {
          item.todos.push(action.payload);
        }
        return item;
      });
      console.log(newGroups);
      return { groups: newGroups };

    default:
      return state;
  }
};
