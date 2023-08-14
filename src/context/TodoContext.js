import React, { createContext, useState } from 'react'

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const contextValues = {
    todos,
    setTodos,
    todo,
    setTodo,
  };

  return (
    <TodoContext.Provider value={contextValues}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
