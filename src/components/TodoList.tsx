import React, { useState } from "react";
import {
  Container,
  FormControl,
  FormControlLabel,
  makeStyles,
  OutlinedInput,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";
import { addTodo } from "../redux/actions/group";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../hooks/useTypeSelector";
import Todo from "./Todo";
import { ITodoList } from "../interfaces";

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

const TodoList: React.FC = () => {
  const classes = useStyles();
  // const { currentGroupId, groups } = useTypeSelector(
  //   (state) => state.groupsList
  // );
  // const todos = groups.reduce((obj, group) => {
  //   if (group.id === currentGroupId) {
  //     obj = group.todos;
  //   }
  //   return obj;
  // }, {});
  //
  // console.log(todos);
  const match = useRouteMatch("/group/:id");
  const { id }: any = match!.params;

  // const { groups } = useTypeSelector((state) => state.groupsList);
  // const todos = groups.reduce((obj, group) => {
  //   if (group.id === id) {
  //     obj = group.todos;
  //   }
  //   return obj;
  // }, {});
  // console.log(todos);

  const [inputSearch, setInputSearch] = useState<string>("");
  const [inputTodo, setInputTodo] = useState<string>("");
  const [radioValue, setRadioValue] = React.useState("All");
  const dispatch = useDispatch();
  const handleSearchInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(evt.target.value);
  };

  const handleTodoInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(evt.target.value);
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(evt.target.value);
  };
  //
  const onEnter = (evt: React.KeyboardEvent) => {
    if (evt.key === "Enter") {
      const newGroup: ITodoList = { groupName: inputTodo, id: Date.now() };
      dispatch(addTodo(newGroup, id));
      setInputTodo("");
    }
  };

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
      <Todo id={id} />
      <OutlinedInput
        value={inputTodo}
        onChange={handleTodoInput}
        className={classes.input}
        placeholder="Добавить"
        onKeyDown={onEnter}
        required={true}
      />
      <Link to="/">Назад</Link>
    </Container>
  );
};

export default TodoList;
