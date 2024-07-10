import "./App.css";
import HeaderSection from "./components/HeaderSection";
import InputSection from "./components/InputSection";
import ToDoSection from "./components/ToDoSection";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  // load data at start
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // update the data

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <HeaderSection />
      <InputSection todos={todos} setTodo={setTodos} />
      <ToDoSection todos={todos} setTodo={setTodos} />
    </div>
  );
}

export default App;

// function goldi(champu) {
//   console.log("goldi is ", champu);
// }

// goldi("not champu");
