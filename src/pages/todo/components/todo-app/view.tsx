import { FC } from "react";
import { StyleToDoApp } from "./style";
import { Footer, Main } from "./components";
import { InputContainer } from "features";
import { TRootState, useSelector } from "shared";

export const ToDoApp: FC = () => {
  const todos = useSelector((state: TRootState) => state.todolist.todos);

  return (
    <StyleToDoApp>
      <InputContainer toggle={true} />
      {todos.length > 0 && <><Main /> <Footer count={todos.length} /></>}  
    </StyleToDoApp>
  );
};
