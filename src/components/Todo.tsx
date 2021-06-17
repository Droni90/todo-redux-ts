import React, { useMemo } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { ITodoList } from "../interfaces";
import { removeTodo } from "../redux/actions/group";
import { useDispatch } from "react-redux";

interface ITodo {
  id: string;
}
const Todo: React.FC<ITodo> = ({ id }) => {
  const dispatch = useDispatch();
  const { groups } = useTypeSelector((state) => state.groupsList);

  const todos = useMemo(() => {
    return groups.find((item) => item.id === +id).todos;
  }, [groups]);

  const handleRemoveButton = (todoId: number) => {
    dispatch(removeTodo(todoId, +id));
  };

  return (
    <List>
      {todos ? (
        todos.map(({ groupName, id }: ITodoList) => {
          return (
            <ListItem key={id} role={undefined} dense button>
              <ListItemText primary={groupName} />
              <ListItemSecondaryAction>
                <IconButton onClick={() => handleRemoveButton(id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })
      ) : (
        <h2>Дел пока нет</h2>
      )}
    </List>
  );
};

export default Todo;
