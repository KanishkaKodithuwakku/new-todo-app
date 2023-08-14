import React from "react";
import "react-toastify/dist/ReactToastify.css";
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <ul className="list-group">
          {todos && todos.map((todo, index) => <TodoListItem kay={index} text={todo}/>)}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
