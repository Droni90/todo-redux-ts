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
import { IGroupList } from "../interfaces";

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
}));

interface IGroups {
  groups: IGroupList[];
  handleRemove: (id: number) => void;
}

const GroupsList: React.FC<IGroups> = ({ groups, handleRemove }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {groups.map(({ groupName, id }) => {
        return (
          <ListItem
            key={id}
            role={undefined}
            className={classes.listItem}
            dense
            button
          >
            <ListItemText primary={`${groupName} (0 / ${groups.length})`} />
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
