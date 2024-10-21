import React, { useState } from "react";
import { FilterButton, StyleFooter } from "./footer-todo.styles";
import { Category, changeFilterCategoty, clearAllCompletedTasks, todoSelectCategory, useAppDispatch, useAppSelector } from "store";

export const FooterTodo: React.FC = () => {
  const { activeTask } = useAppSelector(todoSelectCategory);
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<Category>(Category.all);
  const handleClear = () => {
    dispatch(clearAllCompletedTasks());
  };

  const handleFilter = (filter: Category) => {
    setFilter(filter);
    dispatch(changeFilterCategoty(filter));
  };

  return (
    <StyleFooter>
      <span>{activeTask} items left!</span>
      <ul>
        <li className="filter">
          <FilterButton
            onClick={() => handleFilter(Category.all)}
            active={filter === Category.all ? 1 : 0}
            href="#"
          >
            All
          </FilterButton>
        </li>
        <li className="filter">
          <FilterButton
            onClick={() => handleFilter(Category.active)}
            active={filter === Category.active ? 1 : 0}
            href="#"
          >
            Active
          </FilterButton>
        </li>
        <li className="filter">
          <FilterButton
            onClick={() => handleFilter(Category.completed)}
            active={filter === Category.completed ? 1 : 0}
            href="#"
          >
            Completed
          </FilterButton>
        </li>
      </ul>
      <button className="completed-all" onClick={handleClear}>Clear completed</button>
    </StyleFooter>
  );
};
