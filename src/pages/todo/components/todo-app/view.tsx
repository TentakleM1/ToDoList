import { FC, useState } from "react";
import { StyleToDoApp } from "./style";
import { Footer, Main } from "./components";
import { InputContainer } from "features";
import { TRootState, useSelector } from "shared";
import { todoSelectCategory } from "../../../../shared/store/todo/todoSelector"

export type TFilter = (filter: string) => void

export const ToDoApp: FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const todos = useSelector((state: TRootState) => state.todolist.todos);
  const todosFilter = todoSelectCategory(todos, filter);

  const handleFilter: TFilter = (filter)  => {setFilter(filter)}

  return (
    <StyleToDoApp>
      <InputContainer toggle={true} />
      {todos.length > 0 && <><Main todos={todosFilter} /> <Footer count={todos.length} active={filter} filter={handleFilter} /></>}  
    </StyleToDoApp>
  );
};
