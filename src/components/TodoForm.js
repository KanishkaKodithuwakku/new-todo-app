import React, { useEffect, useState, useRef } from "react";
import Button from "./Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoForm = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  const handleOnClick = () => {
    if (todos.indexOf(todo) !== -1) {
      setError(todo + " is already in the list!");
      setTodo("");
      inputRef.current.focus();
      return;
    }
    setTodos([...todos, todo]);
    toast.success(todo + " is added to the list!");
    setTodo("");
    inputRef.current.focus();
  };

  const handleClearAll = () => {
    window.localStorage.clear();
    setTodos([]);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));

    if (todos.length < 1) { 
      toast.warn("No more Todos left!")
    }
  }, [todos]);

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
            ref={inputRef}
          />

          <div className="row">
            <div className="col-md-1">
              <Button
                handleOnClick={handleOnClick}
                btnText={`Add`}
                disabled={!todo ? true : false}
              />
            </div>
            <div className="col-md-1">
              <Button handleOnClick={handleClearAll} btnText={`Clear`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoForm;
