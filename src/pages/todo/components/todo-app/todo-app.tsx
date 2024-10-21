import React from "react";
import { StyleToDoApp } from "./todo-app.style";
import { useAppSelector, todoSelectCategory } from "store";
import { FooterTodo, MainTodo } from "components";
import { Input } from "shared";

export const ToDoApp: React.FC = () => {
  const todos = useAppSelector(todoSelectCategory);
  return (
    <StyleToDoApp>
      <Input isToggle={true} />
      {todos.length > 0 && (
        <>
          <MainTodo />
          <FooterTodo />
        </>
      )}
    </StyleToDoApp>
  );
};
