import React, { useState } from "react";
import Main from "./Main";
import "fontsource-roboto";
import { Container, makeStyles } from "@material-ui/core";
import TodoList from "./TodoList";

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
  const [isGroupOpen, setGroupOpen] = useState(false);
  const handleGroupClick = () => {
    setGroupOpen(!isGroupOpen);
  };

  return (
    <Container className={classes.root}>
      {isGroupOpen ? (
        <TodoList handleGroupClick={handleGroupClick} />
      ) : (
        <Main handleGroupClick={handleGroupClick} />
      )}
    </Container>
  );
};

export default App;
