import { ActionGroupTypes, GroupAction, GroupsState } from "../../types/todo";

const initialState: GroupsState = {
  group: [],
};

export const groupsList = (
  state: GroupsState = initialState,
  action: GroupAction
): GroupsState => {
  let newGroups;
  switch (action.type) {
    case ActionGroupTypes.ADD_GROUP:
      newGroups = [...state.group];
      newGroups.push(action.payload);
      return { group: newGroups };

    case ActionGroupTypes.REMOVE_GROUP:
      newGroups = state.group.filter((group) => group.id !== action.payload);
      return { group: newGroups };

    default:
      return state;
  }
};
