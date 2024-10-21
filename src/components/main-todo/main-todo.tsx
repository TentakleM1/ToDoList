import React from "react";
import { StyleMain } from "./main-todo.styles";
import { Task } from "./components/task/task";
import { todoSelectCategory, useAppSelector } from "store";

export const MainTodo: React.FC = () => {
  const { tasks } = useAppSelector(todoSelectCategory);

  return (
    <StyleMain>
      <ul>
        {tasks.map((todo) => {
          return (
            <Task
              key={todo.id}
              id={todo.id}
              isCompleted={todo.isCompleted}
              task={todo.text}
            />
          );
        })}
      </ul>
    </StyleMain>
  );
};
