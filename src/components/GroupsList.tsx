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
  handleRemoveGroup: (evt: React.SyntheticEvent, id: number) => void;
}
const GroupsList: React.FC<IGroupsList> = ({
  handleRemoveGroup,
  handleGroupClick,
}) => {
  const classes = useStyles();
  const todoGroups = useTypeSelector((state) => state.groupsList.todoGroups);

  return (
    <List className={classes.root}>
      {todoGroups.map(({ groupName, id, totalCount, completedCount }) => {
        return (
          <Link key={id} className={classes.link} to={`/group/${id}`}>
            <ListItem
              role={undefined}
              className={classes.listItem}
              onClick={() => handleGroupClick(id)}
              dense
              button
            >
              <ListItemText
                className={classes.text}
                primary={`${groupName} (${completedCount} / ${totalCount})`}
              />
              <ListItemSecondaryAction>
                <IconButton onClick={(evt) => handleRemoveGroup(evt, id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
};

export default GroupsList;
