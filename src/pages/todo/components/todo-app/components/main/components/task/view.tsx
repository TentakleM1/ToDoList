import { FC } from "react";
import { StyleLi } from "./style";
import { useDispatch } from "shared";
import {
  todoCheck,
  todoDelete,
} from "../../../../../../../../shared/store/todo/todoSlice";
// import { InputContainer } from "features";

interface ITaskProps {
  id: number;
  completed: boolean;
  task: string;
}

export const Task: FC<ITaskProps> = ({ id, completed, task }) => {
  const dispatch = useDispatch();

  const handle = () => {
    dispatch(todoCheck({ id: id, completed: !completed }));
  };

  const handleDeleteTodo = () => {
    dispatch(todoDelete(id));
  };

  return (
    <StyleLi>
      <div className="task-container">
        <input
          type="checkbox"
          className="checkbox"
          name=""
          onChange={handle}
          checked={completed}
        />
        <label>{completed ? <s>{task}</s> : task}</label>
        <button onClick={handleDeleteTodo}>Delete</button>
      </div>
      {/* <InputContainer /> */}
    </StyleLi>
  );
};
