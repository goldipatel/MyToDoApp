import React, { useRef, useState } from "react";
import "../styles/InputSection.css";

function InputSection({ todos, setTodo }) {
  const [inpValue, setInpValue] = useState("");

  const inpBox = useRef(null);

  function handleInputBoxValue(e) {
    setInpValue(e.target.value);
  }

  function handleInput(e) {
    let newTodo = {
      task: inpValue,
      done: false,
      deleted: false,
    };

    // update todo list
    setTodo([...todos, newTodo]);

    // reset
    inpBox.current.value = "";
    setInpValue("");
  }

  return (
    <div className="todo-input">
      <input
        ref={inpBox}
        className="todo-inp-box"
        type="text"
        name="todo-input"
        id="todo-input"
        placeholder="Task"
        onChange={handleInputBoxValue}
      />
      <button
        className={`todo-btn-add ${!inpValue ? "disabled" : ""}`}
        onClick={handleInput}
        disabled={!inpValue}
      >
        Add
      </button>
    </div>
  );
}

export default InputSection;
