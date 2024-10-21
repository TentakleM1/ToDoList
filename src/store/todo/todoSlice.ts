import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryEnum, IInitialState, ITodo } from "./type";

const initialState: IInitialState = {
  todos: [],
  category: CategoryEnum.all,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    createTask: (state: IInitialState, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload);
    },

    changeIsCompleted: (
      state: IInitialState,
      action: PayloadAction<number>
    ) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
    },

    taskDelete: (state: IInitialState, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    changeAllIsCompleted: (state: IInitialState) => {
      const isCompletedTask = state.todos.filter(
        (todo) => todo.isCompleted
      );

      const isAllCompleted = isCompletedTask.length === state.todos.length; 

      state.todos = state.todos.map((todo) => {
        todo.isCompleted = !isAllCompleted;
        return todo;
      });
    },

    clearAllCompletedTasks: (state: IInitialState) => {
      state.todos = state.todos.filter((todo) => !todo.isCompleted);
    },

    changeTaskText: (
      state: IInitialState,
      action: PayloadAction<{ id: number; text: string }>
    ) => {
      const { id, text } = action.payload;

      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          todo.text = text;
        }
        return todo;
      });
    },

    changeFilterCategoty: (
      state: IInitialState,
      action: PayloadAction<CategoryEnum>
    ) => {
      state.category = action.payload;
    },
  },
});

export const {
  createTask,
  changeIsCompleted,
  taskDelete,
  changeAllIsCompleted,
  clearAllCompletedTasks,
  changeTaskText,
  changeFilterCategoty,
} = todoSlice.actions;

export default todoSlice.reducer;
