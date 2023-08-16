import { useState } from "react";
import Layout from "./components/Layout";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Title from "./components/Title";

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
      <Title title={`Todos`} count={todos.length} />
      <TodoForm setTodos={setTodos} todos={todos} />
      <TodoList setTodos={setTodos} todos={todos} />
    </Layout>
  );
}
export default App;
