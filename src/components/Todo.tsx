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

interface ITodo {
  id: string;
}
const Todo: React.FC<ITodo> = ({ id }) => {
  const { groups } = useTypeSelector((state) => state.groupsList);

  const todos = useMemo(() => {
    return groups.find((item) => item.id === +id).todos;
  }, [groups]);
  console.log(todos);

  return (
    <List>
      {todos ? (
        todos.map(({ groupName, id }: ITodoList) => {
          return (
            <ListItem
              key={id}
              role={undefined}
              // className={classes.listItem}
              // onClick={() => handleGroupClick(id)}
              dense
              button
            >
              <ListItemText primary={`${groupName} (0 / ${groups.length})`} />
              <ListItemSecondaryAction>
                <IconButton>
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
