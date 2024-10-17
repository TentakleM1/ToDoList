import React from "react"
import { StyleMain } from "./style"
import { Task } from "./components"
import { useSelector } from "shared"

export const Main: React.FC = () => {
  const todos = useSelector(state => state.todolist.todos)
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