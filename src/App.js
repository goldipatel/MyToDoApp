import "./App.css";
import Header from "./components/Header";
import ToDos from "./components/ToDos";
import Middle from "./components/Middle";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    console.log("todos = ", todos);
  }, [todos]);
  return (
    <div className="App">
      <Header />
      <Middle todos={todos} setTodos={setTodos} />
      <ToDos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
