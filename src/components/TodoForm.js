import React, { useEffect, useState } from "react";
import Button from "./Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoForm = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(null);

  const handleOnClick = () => {
    if (todos.indexOf(todo) !== -1) {
      setError(todo + " is already in the list!");
      setTodo('')
      return
    }
    setTodos([...todos, todo]);
    setTodo("");
  };

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  useEffect(() => {
    toast.error(error);
  }, [error]);

  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <ToastContainer />
          <input
            type="text"
            className="form-control form-control-sm"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <Button
            handleOnClick={handleOnClick}
            btnText={`ADD`}
            disabled={!todo ? true : false}
          />
        </div>
      </div>
    </>
  );
};

export default TodoForm;
