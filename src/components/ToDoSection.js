import React from "react";
import Task from "./Task";
import "../styles/ToDoSection.css";

function ToDoSection({ todos, setTodo }) {
  // let todos = [
  //   {
  //     task: "Wake up in morning.",
  //     done: true/false,
  //   },
  //   {
  //     task: "do homework",
  //     done: true/false,
  //   },
  //   {
  //     task: "eat healthy food",
  //     done: true/false,
  //   },
  // ];

  return (
    <div className="todos">
      <h3>ToDo's</h3>
      <div className="tasks">
        {todos.map((todo, idx) => (
          <Task
            todo={todo}
            setTodo={setTodo}
            todos={todos}
            key={idx}
            todoIdx={idx}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoSection;
