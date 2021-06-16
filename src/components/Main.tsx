import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  makeStyles,
  OutlinedInput,
} from "@material-ui/core";
import { IGroupList, ITodoList } from "../interfaces";
import GroupsList from "./GroupsList";
import { fetchGroups, removeGroup } from "../redux/actions/group";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../hooks/useTypeSelector";

const useStyles = makeStyles({
  roof: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
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
interface IMain {
  handleGroupClick: () => void;
}
const Main: React.FC<IMain> = ({ handleGroupClick }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>("");
  const groups = useTypeSelector((state) => state.groupsList.group);

  const handleValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  const handleAddGroupSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    const newGroup: ITodoList = { groupName: inputValue, id: Date.now() };
    dispatch(fetchGroups(newGroup));
    setInputValue("");
  };

  return (
    <Container className={classes.roof}>
      <Box className={classes.box}>
        <h1>ToDo groups</h1>
        {groups.length ? (
          <GroupsList handleGroupClick={handleGroupClick} />
        ) : (
          <h2 className={classes.subtitle}>У вас нет дел</h2>
        )}
      </Box>
      <form className={classes.form} onSubmit={handleAddGroupSubmit}>
        <OutlinedInput
          id="component-outlined"
          value={inputValue}
          onChange={handleValue}
          className={classes.input}
          required={true}
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

export default Main;
