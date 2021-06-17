import React from "react";
import Main from "./Main";
import "fontsource-roboto";
import { Container, makeStyles } from "@material-ui/core";
import TodoPage from "./TodoPage";
import { Route, Switch } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#cfe8fc",
    height: "100vh",
    padding: "50px 0",
    alignItems: "center",
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  const handleGroupClick = () => {};

  return (
    <Container className={classes.root}>
      <Switch>
        <Route exact path="/">
          <Main handleGroupClick={handleGroupClick} />
        </Route>
        <Route path="/group/:id">
          <TodoPage />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
