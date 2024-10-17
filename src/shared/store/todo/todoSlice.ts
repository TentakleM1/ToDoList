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
            const newTodos = state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = completed
                }
                return todo;
            })
            
            state.todos = newTodos
        },
        todoDelete: (state: IInitialState, action: PayloadAction<number>) => {
            const newTodos = state.todos.filter(todo => todo.id !== action.payload)
            state.todos = newTodos
        },
        todoAllCheck: (state: IInitialState) => {
            const newTodos = state.todos.map(todo => {
                todo.completed = true;
                return todo;
            })

            state.todos = newTodos
        }
    } 
});


export const {
    todos,
    todoCheck,
    todoDelete,
    todoAllCheck
} = todoSlice.actions;

export default todoSlice.reducer
