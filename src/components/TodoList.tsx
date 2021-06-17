import React, { useMemo } from "react";
import { List } from "@material-ui/core";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { ITodoList } from "../interfaces";

import TodoItem from "./TodoItem";

interface ITodo {
  id: string;
  inputSearch: string;
  radioValue: string;
}

const TodoList: React.FC<ITodo> = ({ id, inputSearch, radioValue }) => {
  const { groups } = useTypeSelector((state) => state.groupsList);
  const groupId = +id;
  const todos = useMemo(() => {
    return groups.find((item) => item.id === groupId).todos;
  }, [groups]);

  return (
    <List>
      {todos.length ? (
        todos.map(({ todoName, id, completed }: ITodoList) => {
          if (!inputSearch && radioValue === "All") {
            return (
              <TodoItem
                todoName={todoName}
                id={id}
                groupId={groupId}
                completed={completed}
              />
            );
          }
          if (inputSearch && todoName.startsWith(inputSearch)) {
            return (
              <TodoItem
                todoName={todoName}
                id={id}
                completed={completed}
                groupId={groupId}
              />
            );
          }
          if (radioValue === "Undone" && !completed) {
            return (
              <TodoItem
                todoName={todoName}
                id={id}
                completed={completed}
                groupId={groupId}
              />
            );
          }
        })
      ) : (
        <h2>Дел пока нет</h2>
      )}
    </List>
  );
};

export default TodoList;
