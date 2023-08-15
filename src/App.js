import { useState } from "react";
import Layout from "./components/Layout";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const localStorageValue = window.localStorage.getItem('todos')
     if (localStorageValue && localStorageValue !== "undefined") {
       return JSON.parse(localStorageValue);
     }
    return todos;
  });


  return (
    <Layout>
      <h1>Todos</h1>
      <TodoForm setTodos={setTodos} todos={todos} />
      <TodoList setTodos={setTodos} todos={todos} />
    </Layout>
  );
}

export default App;
