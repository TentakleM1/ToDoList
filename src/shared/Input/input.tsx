import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { InputWrapper } from "./input.styles";
import { changeTaskText, createTask, changeAllIsCompleted, useAppDispatch } from "store";

interface IInput {
  id?: number;
  isToggle?: boolean;
  value?: string;
  blur?: () => void;
}

export const Input: React.FC<IInput> = (props) => {
  const [task, setTask] = useState<string>(props.value ?? "");
  const dispatch = useAppDispatch();

  const handle = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  const handleCreateTask = (e: KeyboardEvent<HTMLFormElement>) => {
    const text = task.trim();
    if (e.code !== "Enter" || e.key !== "Enter" || !text) {
      return;
    }
    e.preventDefault();

    if (props.id && props.blur) {
      dispatch(changeTaskText({ id: props.id, text }));
      props.blur();
      return;
    }

    dispatch(
      createTask({
        id: Date.now(),
        text,
        date: Date.now(),
        isCompleted: false,
      })
    );
    setTask("");
  };

  const handleAllCheck = () => {
    dispatch(changeAllIsCompleted());
  };

  return (
    <InputWrapper className="create__task">
      <form onKeyDown={handleCreateTask}>
        {props.isToggle && (
          <label onClick={handleAllCheck} className="toggle-all"></label>
        )}
        <input
          className="text-input"
          type="text"
          placeholder="What needs to be done?"
          value={task}
          onChange={handle}
          autoFocus
          onBlur={props.blur}
        />
      </form>
    </InputWrapper>
  );
};
