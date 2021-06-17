import React from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { Link } from "react-router-dom";
import { removeGroup } from "../redux/actions/group";
import { useDispatch } from "react-redux";
import { ITodoList } from "../interfaces";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "760px",
    backgroundColor: "inherit",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    textDecoration: "none",
    color: "#000",
  },
  text: {
    fontSize: "45px",
  },
}));
interface IGroupsList {
  handleGroupClick: (id: number) => void;
}
const GroupsList: React.FC<IGroupsList> = ({ handleGroupClick }) => {
  const classes = useStyles();
  const groups = useTypeSelector((state) => state.groupsList.groups);
  const dispatch = useDispatch();
  const handleRemove = (id: number) => {
    dispatch(removeGroup(id));
  };

  const countTodos = (id: number) => {
    let count;
    groups.forEach((group) => {
      if (group.id === id) {
        count = group.todos.length;
      }
    });
    return count;
  };

  const countCompletedTodos = (id: number) => {
    let count = 0;
    groups.forEach((group) => {
      if (group.id === id) {
        group.todos.forEach((todo: ITodoList) => {
          if (todo.completed) {
            count++;
          }
        });
      }
    });
    return count;
  };

  return (
    <List className={classes.root}>
      {groups.map(({ groupName, id }) => {
        return (
          <ListItem
            key={id}
            role={undefined}
            className={classes.listItem}
            onClick={() => handleGroupClick(id)}
            dense
            button
          >
            <Link className={classes.link} to={`/group/${id}`}>
              <ListItemText
                className={classes.text}
                primary={`${groupName} (${countCompletedTodos(
                  id
                )} / ${countTodos(id)})`}
              />
            </Link>

            <ListItemSecondaryAction>
              <IconButton onClick={() => handleRemove(id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GroupsList;
