import { createSelector } from "@reduxjs/toolkit";
import { TRootState } from "../store";
import { CategoryEnum } from "./type";

export const todoSelectCategory = createSelector(
  [
    (state: TRootState) => {
      return state.todolist;
    },
  ],
  ({ todos, category }) => {
    const activeTasks = todos.filter((task) => !task.isCompleted)

    if (category === CategoryEnum.active) {
      return {
        tasks: activeTasks,
        length: todos.length,
        activeTask: activeTasks.length
      };
    }
    if (category === CategoryEnum.completed) {
      return {
        tasks: todos.filter((task) => task.isCompleted),
        length: todos.length,
        activeTask: activeTasks.length
      };
    }
    return { tasks: todos, length: todos.length, activeTask: activeTasks.length };
  }
);
