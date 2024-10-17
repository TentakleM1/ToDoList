import { FC, useState } from "react";
import { StyleLi } from "./style";
import { useDispatch } from "shared";
import { todoCheck } from "../../../../../../../../shared/store/todo/todoSlice";
// import { InputContainer } from "features";
interface ITaskProps {
  id: number;
  completed: boolean;
  task: string;
}

export const Task: FC<ITaskProps> = ({ id, completed, task }) => {
  const [check, setCheck] = useState<boolean>(completed);
  const dispatch = useDispatch();

  const handle = () => {
    setCheck(!check);

    dispatch(todoCheck({ id: id, completed: check }));
  };

  return (
    <StyleLi>
      <div className="task-container">
        <input type="checkbox" className="checkbox" name="" onChange={handle} checked={check} />
        <label>{task}</label>
      </div>
      {/* <InputContainer /> */}
    </StyleLi>
  );
};
