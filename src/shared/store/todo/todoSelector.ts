import { createSelector } from "reselect";
import { TTodos } from "./type";

export const todoSelectCategory = createSelector(
  [
    (state: TTodos) => {
      return state;
    },
    (state: TTodos, category: string) => category
  ],
  (todos, category) => {
    console.log(todos);
  //   if(category === 'active') {
  //       return todos.filter((task) => task.completed === false);

  //   }
  //   if(category === 'completed') {
  //       return todos.filter((task) => task.completed === true);

  //   }
  //   return todos;
  // }
);
