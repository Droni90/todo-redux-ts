import React, { useEffect } from "react";
import Main from "./Main";
import "fontsource-roboto";
import {
  CircularProgress,
  Container,
  makeStyles,
  Snackbar,
} from "@material-ui/core";
import TodoPage from "./TodoPage";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadGroups, loadTodos, removeGroup } from "../redux/actions/group";
import { useTypeSelector } from "../hooks/useTypeSelector";
import ErrorHandler from "./errorHandler/ErrorHandler";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#cfe8fc",
    height: "100vh",
    padding: "50px 0",
    alignItems: "center",
  },
  spinner: {
    position: "absolute",
    zIndex: 500,
    top: "40%",
    left: "50%",
  },
  error: {
    position: "absolute",
    top: "30px",
    left: "32%",
    color: "red",
  },
});

const App: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { groupsList, errors } = useTypeSelector((state) => state);

  const handleGroupClick = (id: number) => {
    dispatch(loadTodos(id));
  };

  const handleRemoveGroup = (evt: React.SyntheticEvent, id: number) => {
    evt.preventDefault();
    dispatch(removeGroup(id));
  };

  useEffect(() => {
    dispatch(loadGroups());
  }, []);

  return (
    <Container className={classes.root}>
      <ErrorHandler error={errors.error} />
      {groupsList.isLoading ? (
        <CircularProgress className={classes.spinner} />
      ) : null}
      <Switch>
        <Route exact path="/">
          <Main
            handleGroupClick={handleGroupClick}
            handleRemoveGroup={handleRemoveGroup}
          />
        </Route>
        <Route path="/group/:id">
          <TodoPage />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
