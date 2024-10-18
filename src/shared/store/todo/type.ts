export interface ITodo {
  id: number;
  task: string;
  date: number;
  completed: boolean;
}

export type TTodos = ITodo[];

export interface IInitialState {
  todos: TTodos;
}

export interface IState {
  todolist: IInitialState
}
