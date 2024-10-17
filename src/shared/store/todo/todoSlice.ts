import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITodo {
  id: number;
  task: string;
  date: number;
  completed: boolean;
}

type TTodos = ITodo[]

interface IInitialState {
    todos: TTodos
}

const initialState: IInitialState = {
    todos: []
};

const todoSlice = createSlice({ 
    name: "todos", 
    initialState: initialState, 
    reducers: {
        todos: (state: IInitialState, action: PayloadAction<ITodo>) => {
            state.todos.push(action.payload);
        },
        todoCheck: (state: IInitialState, action: PayloadAction<{ id: number; completed: boolean }>) => {
            const { id, completed } = action.payload;
            const newTodos = state.todos.filter(todo => todo.id !== id)
            console.log(newTodos)
        }
    } 
});


export const {
    todos,
    todoCheck
} = todoSlice.actions;

export default todoSlice.reducer
