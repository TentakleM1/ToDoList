import { createSelector } from "reselect";
import { TRootState } from "../store";

export const todoSelectCategory = createSelector(
  [
    (state: TRootState, category: string) => {
      return { todos: state.todolist.todos, category: category };
    },
  ],
  ({ todos, category }) => {
    if (category === "active") {
      return {tasks: todos.filter((task) => task.completed === false), length: todos.length}
    }
    if (category === "completed") {
      return {tasks: todos.filter((task) => task.completed === true), length: todos.length}
    }
    return {tasks: todos, length: todos.length};
  }
);
