export interface ITodo {
  id: number;
  text: string;
  date: number;
  isCompleted: boolean;
}

export type TodosType = ITodo[];

export interface IInitialState {
  todos: TodosType;
  category: CategoryEnum;
}

export interface IState {
  todolist: IInitialState;
}

export enum CategoryEnum {
  all = "all",
  active = "active",
  completed = "completed",
}
