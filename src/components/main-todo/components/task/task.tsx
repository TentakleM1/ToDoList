import React, { useState } from "react";
import { Lists } from "./task.style";
import { changeIsCompleted, taskDelete, useAppDispatch } from "store";
import { Input } from "shared";
import { deleteImg, writeImg } from "icon";

interface ITaskProps {
  id: number;
  isCompleted: boolean;
  task: string;
}

export const Task: React.FC<ITaskProps> = (props) => {
  const [isChange, setIsChange] = useState(false);
  const dispatch = useAppDispatch();

  const handleCheck = () => {
    dispatch(changeIsCompleted(props.id));
  };

  const handleDeleteTodo = () => {
    dispatch(taskDelete(props.id));
  };

  const handleChangeTodo = () => {
    setIsChange(!isChange);
  };

  const handleBlur = () => {
    setIsChange(!isChange);
  };

  return (
    <Lists>
      {isChange ? (
        <Input id={props.id} value={props.task} blur={handleBlur} />
      ) : (
        <>
          <div className="task-container">
            <input
              type="checkbox"
              className="checkbox"
              name=""
              onChange={handleCheck}
              checked={props.isCompleted}
            />
            <label>{props.isCompleted ? <s>{props.task}</s> : props.task}</label>
            <div>
              <button
                className="change-or-delete-task-button"
                onClick={handleChangeTodo}
              >
                <img
                  className="change-or-delete-task-icon"
                  src={writeImg}
                  alt=""
                />
              </button>
              <button
                className="change-or-delete-task-button"
                onClick={handleDeleteTodo}
              >
                <img
                  className="change-or-delete-task-icon"
                  src={deleteImg}
                  alt=""
                />
              </button>
            </div>
          </div>
        </>
      )}
    </Lists>
  );
};
