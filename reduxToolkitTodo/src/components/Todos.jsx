import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function Todos() {
  // Get todos from redux
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
