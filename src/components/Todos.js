import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import List from "./List";
import TextInput from "./TextInput";
import Button from "./Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Todos = () => {
  const { todo, setTodo, todos, setTodos } = useContext(TodoContext);
  const [disabled, setDisabled] = useState(true)

  // if (todo) { 
  //   setDisabled(false)
  // }

  function handleOnChange(value) {
    setTodo(value);
    setDisabled(false);
  }

  function handleOnClick() {
    if (todos.includes(todo)) { 
      toast.warn(todo+ " is already added")
       setTodo("");
      return
    }
     
    setTodos([...todos, todo]);
    setTodo("");
    setDisabled(true);
  }
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <ToastContainer/>
          <TextInput
            value={todo}
            handleOnChange={(e) => handleOnChange(e.target.value)}
          />
          <Button
            handleOnClick={handleOnClick}
            btnText={`ADD`}
            disabled={disabled}
          />
        </div>
      </div>
      <List />
    </>
  );
};

export default Todos;
