import React from "react";
import { toast } from "react-toastify";
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, setTodos }) => {

  const handleDeleteTodo = (index) => { 
    console.log("delete clicked", index);
    const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
    console.log(newTodos);
    setTodos(newTodos);
    toast.error(todos[index] + " is deleted form the list!");
  }

  return (
    <div className="row">
      <div className="col-sm-6">
        <ul className="list-group">
          {todos &&
            todos.map((todo, index) => (
              <TodoListItem
                key={index}
                text={todo}
                handleOnClick={() => handleDeleteTodo(index)}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
