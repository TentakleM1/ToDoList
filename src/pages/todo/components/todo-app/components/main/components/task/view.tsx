import { FC, useState } from "react";
import { StyleLi } from "./style";
import { useDispatch } from "shared";
import { todoCheck, todoDelete } from "shared";
import { InputContainer } from "features";
import { deleteImg, writeImg } from "images";
interface ITaskProps {
  id: number;
  completed: boolean;
  task: string;
}

export const Task: FC<ITaskProps> = ({ id, completed, task }) => {
  const [change, setChange] = useState(false);
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(todoCheck({ id: id, completed: !completed }));
  };

  const handleDeleteTodo = () => {
    dispatch(todoDelete(id));
  };

  const handleChangeTodo = () => {
    setChange(!change);
  };

  const handleBlut = () => {
    setChange(!change);
  };

  return (
    <StyleLi>
      {change ? (
        <InputContainer id={id} value={task} blur={handleBlut} />
      ) : (
        <>
          <div className="task-container">
            <input
              type="checkbox"
              className="checkbox"
              name=""
              onChange={handleCheck}
              checked={completed}
            />
            <label>{completed ? <s>{task}</s> : task}</label>
            <div>
              <button onClick={handleChangeTodo}>
                <img src={writeImg} alt="" />
              </button>
              <button onClick={handleDeleteTodo}>
                <img src={deleteImg} alt="" />
              </button>
            </div>
          </div>
        </>
      )}
    </StyleLi>
  );
};
