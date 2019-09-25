// Imported using rafc tab
import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import Todo from "./Todo";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  // If there is length, then do this, if not, do this.
  return todos.length ? (
    <div>
      <h1>React App Ready</h1>
      <p>You have {todos.length} to complete.</p>
      <div className="todo-list">
        <ul>
          {todos.map(todo => {
            return <Todo todo={todo} key={todo.id} />;
          })}
        </ul>
      </div>
    </div>
  ) : (
    <div className="empty">
      <h1>React App Ready</h1>
      <span>Nothing todo! Enjoy your day.</span>
    </div>
  );
};

export default TodoList;
