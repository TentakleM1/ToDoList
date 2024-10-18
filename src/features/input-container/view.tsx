import { ChangeEvent, KeyboardEvent, FC, useState, useEffect } from "react";
import { StyleInputContainer } from "./style";
import { changeTodo, useDispatch } from "shared";
import { todoAllCheck, todos } from "shared";

interface IInputContainer {
  id?: number;
  toggle?: boolean;
  value?: string;
  blur?: () => void;
}

export const InputContainer: FC<IInputContainer> = ({ id, toggle, value, blur }) => {
  const [task, setTask] = useState<string>(value ?? '');
  const dispatch = useDispatch();

  const handle = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  useEffect(() => {

    const handleTest = (e: { key: unknown; }) => {
      alert(e.key)

    }

    window.addEventListener('keydown', handleTest)

    return () => {
      window.removeEventListener('keydown', handleTest)
    }
  }, [])

  const handleCreateTask = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.code !== "Enter" || !task || e.key !== 'Enter') {
      return;
    }
    e.preventDefault();

    if(id && blur) {
      dispatch(changeTodo({id: id, task: task}));
      blur();
      return;
    }

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
          autoFocus
          onBlur={blur}
        />
      </form>
    </StyleInputContainer>
  );
};
