import React from "react";

function Task({ todo }) {
  return (
    <div className="task">
      <div>{todo}</div>
      <button>✅</button>
      <button>❌</button>
    </div>
  );
}

export default Task;
