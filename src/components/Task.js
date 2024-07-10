import React from "react";
import "../styles/Task.css";

function Task({ todo, setTodo, todos, todoIdx }) {
  function deleteTodo() {
    const updatedTodos = [...todos];
    updatedTodos[todoIdx].deleted = !updatedTodos[todoIdx].deleted;
    setTodo(updatedTodos);
    // const updatedTodos = todos.filter((_, i) => i !== todoIdx);
    // setTodo(updatedTodos);
  }

  function updateStatus() {
    const updatedTodos = [...todos];
    updatedTodos[todoIdx].done = !updatedTodos[todoIdx].done;
    setTodo(updatedTodos);
  }
  return (
    <div className="task">
      <div
        className={`task-description ${todo.done ? "done" : ""} ${
          todo.deleted ? "deleted" : ""
        }`}
      >
        {todo.task}
      </div>
      <button
        className="check-button"
        onClick={updateStatus}
        disabled={todo.done || todo.deleted}
      >
        ✅
      </button>
      <button
        className="cross-button"
        onClick={deleteTodo}
        disabled={todo.done || todo.deleted}
      >
        ❌
      </button>
    </div>
  );
}

export default Task;
