import React, { useRef } from "react";

function Middle({ todos, setTodos }) {
  let MiddleBox = useRef();

  function addEvent(e) {
    let task = MiddleBox.current.value;
    setTodos([...todos, task]);
  }
  return (
    <div className="secondBox">
      <input
        type="text"
        className="input"
        placeholder="Tasks"
        ref={MiddleBox}
      />
      <div className="btn" onClick={addEvent}>
        Add
      </div>
    </div>
  );
}

export default Middle;
