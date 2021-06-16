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
import { removeGroup } from "../redux/actions/group";
import { useDispatch } from "react-redux";

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
  completed: {
    textDecoration: "line-through",
  },
}));
interface IGroupsList {
  handleGroupClick: () => void;
}
const GroupsList: React.FC<IGroupsList> = ({ handleGroupClick }) => {
  const classes = useStyles();
  const groups = useTypeSelector((state) => state.groupsList.group);
  const dispatch = useDispatch();
  const handleRemove = (id: number) => {
    dispatch(removeGroup(id));
  };

  return (
    <List className={classes.root}>
      {groups.map(({ groupName, id }) => {
        return (
          <ListItem
            key={id}
            role={undefined}
            className={classes.listItem}
            onClick={handleGroupClick}
            dense
            button
          >
            <ListItemText
              primary={`${groupName} (0 / ${groups.length})`}
              // className={completed ? classes.completed : ""}
            />
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
