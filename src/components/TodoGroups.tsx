import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  makeStyles,
  OutlinedInput,
} from "@material-ui/core";
import { IGroupList } from "../interfaces";
import GroupsList from "./GroupsList";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#cfe8fc",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "50px 0",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#96e395",
    height: "40px",
    maxWidth: "100%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "200px",
  },
  input: {
    marginBottom: "15px",
    backgroundColor: "#fff",
    height: "40px",
    width: "100%",
  },
  box: {
    maxWidth: "360px",
    width: "100%",
    textAlign: "center",
  },
  subtitle: {
    marginTop: "50%",
  },
});

const TodoGroups: React.FC = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState<string>("");
  const [groups, setGroups] = useState<IGroupList[]>([]);

  const handleValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    const newGroup: IGroupList = { groupName: inputValue, id: Date.now() };
    setGroups([newGroup, ...groups]);
    setInputValue("");
  };

  const handleRemove = (id: number) => {
    setGroups((prev) => prev.filter((group) => group.id !== id));
  };

  return (
    <Container className={classes.root}>
      <Box className={classes.box}>
        <h1>ToDo groups</h1>
        {groups.length ? (
          <GroupsList groups={groups} handleRemove={handleRemove} />
        ) : (
          <h2 className={classes.subtitle}>У вас нет дел</h2>
        )}
      </Box>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <OutlinedInput
          id="component-outlined"
          value={inputValue}
          onChange={handleValue}
          className={classes.input}
        />
        <Button
          className={classes.button}
          variant="outlined"
          size="small"
          type="submit"
        >
          Create
        </Button>
      </form>
    </Container>
  );
};

export default TodoGroups;
