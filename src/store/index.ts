export {
  createTask,
  changeIsCompleted,
  taskDelete,
  changeAllIsCompleted,
  clearAllCompletedTasks,
  changeTaskText,
  changeFilterCategoty,
} from "./todo/todoSlice";
export { useAppDispatch, useAppSelector, store } from "./store";
export type { TRootState } from "./store";
export type { TodosType } from "./todo/type";
export  {  CategoryEnum as Category } from "./todo/type";
export { todoSelectCategory } from "./todo/todoSelector";
