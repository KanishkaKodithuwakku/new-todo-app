import { useState } from "react";
import Layout from "./components/Layout";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([])
  return (
    <Layout>
      <h1>Todos</h1>

      <TodoForm setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} />
    </Layout>
  );
}

export default App;
