import {FC} from "react"
import { StyleMain } from "./style"
import { Task } from "./components"
import { TTodos } from "shared"

interface IMain {
  todos: TTodos
}

export const Main: FC<IMain> = ({ todos }) => {
    return (
        <StyleMain>
        <ul>
          {
            todos.map( todo => {
              return <Task key={todo.id} id={todo.id} completed={todo.completed} task={todo.task}/>
            })
          }
        </ul>
      </StyleMain>
    )
}