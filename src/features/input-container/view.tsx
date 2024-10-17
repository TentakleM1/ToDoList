import { ChangeEvent, KeyboardEvent, FC, useState } from "react";
import { StyleInputContainer } from "./style";
import { useDispatch } from "shared";
import { todoAllCheck, todos } from "../../shared/store/todo/todoSlice";

interface IInputContainer {
  toggle?: boolean;
}

export const InputContainer: FC<IInputContainer> = ({ toggle }) => {
  const [task, setTask] = useState<string>("");
  const dispatch = useDispatch();

  const handle = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  const handleCreateTask = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.code !== "Enter" || !task) {
      return;
    }
    e.preventDefault();
    dispatch(todos({
      id: Date.now(),
      task: task,
      date: Date.now(),
      completed: false,
    }));
    setTask("");
  };

  const handleAllCheck = () => {
    dispatch(todoAllCheck())
  }

  return (
    <StyleInputContainer className="create__task">
      <form onKeyDown={handleCreateTask}>
        {toggle && <label  onClick={handleAllCheck} className="toggle-all"></label>}
        <input
          type="text"
          placeholder="What needs to be done?"
          value={task}
          onChange={handle}
        />
      </form>
    </StyleInputContainer>
  );
};
