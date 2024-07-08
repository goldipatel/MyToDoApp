import React from "react";
import Task from "./Task";

function ToDos({ todos, setTodos }) {
  // let tasks = [
  //   {
  //     id: 1,
  //     task: "this is first task",
  //   },
  //   {
  //     id: 2,
  //     task: "this is second task",
  //   },
  //   {
  //     id: 3,
  //     task: "this is third task",
  //   },
  // ];
  return (
    <div className="thirdBox">
      <h3>Tasks</h3>
      <div className="tasks">
        {todos.map((todo) => (
          <Task todo={todo} />
        ))}

        {/* <Task todo={tasks[0]} />
        <Task todo={tasks[1]} />
        <Task todo={tasks[2]} /> */}
      </div>
    </div>
  );
}

export default ToDos;
