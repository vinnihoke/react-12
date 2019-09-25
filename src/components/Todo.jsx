import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const Todo = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  return (
    <div>
      <li onClick={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}>
        <div
          className="title"
          className={todo.completed === true ? "completed" : null}
        >
          {todo.title}
        </div>
      </li>
    </div>
  );
};

export default Todo;
