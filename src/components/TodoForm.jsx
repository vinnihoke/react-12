import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", todo: { title } });
    setTitle("");
  };
  const handleClear = e => {
    e.preventDefault();
    dispatch({ type: "CLEAR_TODO" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Todo Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <input type="submit" value="Add Todo" />
      </form>
      <button onClick={handleClear}>Clear Todo</button>
    </div>
  );
};

export default TodoForm;
