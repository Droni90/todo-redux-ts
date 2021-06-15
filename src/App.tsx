import React from "react";
import TodoGroups from "./components/TodoGroups";
import "fontsource-roboto";
import { Container } from "@material-ui/core";

const App: React.FC = () => {
  return (
    <Container maxWidth="md">
      <TodoGroups />
    </Container>
  );
};

export default App;
