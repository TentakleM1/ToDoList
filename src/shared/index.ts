export {
    todos,
    todoCheck,
    todoDelete,
    todoAllCheck,
    clearCompleted,
    changeTodo
} from './store/todo/todoSlice';
export { store } from './store/store';
export { useSelector } from './store/store';
export type { TRootState } from './store/store';
export { useDispatch } from './store/store';
export type { TTodos } from './store/todo/type'
