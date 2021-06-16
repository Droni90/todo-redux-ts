import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  makeStyles,
  OutlinedInput,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import GroupsList from "./GroupsList";

const useStyles = makeStyles({
  roof: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
  },
  input: {
    marginBottom: "15px",
    backgroundColor: "#fff",
    height: "40px",
    width: "80%",
  },
});
interface ITodoList {
  handleGroupClick: () => void;
}
const TodoList: React.FC<ITodoList> = ({ handleGroupClick }) => {
  const classes = useStyles();
  const [inputSearch, setInputSearch] = useState<string>("");
  const [inputTodo, setInputTodo] = useState<string>("");
  const [done, setDone] = useState<boolean>(false);

  const handleSearchInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(evt.target.value);
  };

  const handleTodoInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(evt.target.value);
  };

  const [radioValue, setRadioValue] = React.useState("All");
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(evt.target.value);
  };
  // const [groups, setGroups] = useState<ITodoList[]>([]);
  //
  // const onEnter = (evt: React.KeyboardEvent) => {
  //   if (evt.key === "Enter") {
  //     const newGroup: ITodoList = { groupName: inputTodo, id: Date.now() };
  //     setGroups([newGroup, ...groups]);
  //     setInputTodo("");
  //   }
  // };

  // const handleRemove = (id: number) => {
  //   setGroups((prev) => prev.filter((group) => group.id !== id));
  // };
  // const handleTodoItem = (id: number) => {
  //   setGroups((prev) =>
  //     prev.map((todo) => {
  //       if (todo.id === id) {
  //         todo.completed = !todo.completed;
  //       }
  //       return todo;
  //     })
  //   );
  // };

  return (
    <Container className={classes.roof}>
      <OutlinedInput
        value={inputSearch}
        onChange={handleSearchInput}
        className={classes.input}
        placeholder="Search..."
        required={true}
      />
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="filter"
          name="filter"
          value={radioValue}
          onChange={handleChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="All" />
          <FormControlLabel value="male" control={<Radio />} label="Undone" />
        </RadioGroup>
      </FormControl>
      <OutlinedInput
        value={inputTodo}
        onChange={handleTodoInput}
        className={classes.input}
        placeholder="Добавить"
        // onKeyDown={onEnter}
        required={true}
      />
      <Button onClick={handleGroupClick}>Назад</Button>
    </Container>
  );
};

export default TodoList;
