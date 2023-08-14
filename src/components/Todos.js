import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import List from "./List";
import TextInput from "./TextInput";
import Button from "./Button";

const Todos = () => {
  const { todo, setTodo,todos, setTodos } = useContext(TodoContext);

  function handleOnChange(value) {
    setTodo([value]);
  }

  function handleOnClick() {
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <TextInput
            value={todo}
            handleOnChange={(e) => handleOnChange(e.target.value)}
          />
          <Button handleOnClick={handleOnClick} btnText={`ADD`} />
        </div>
      </div>
      <List />
    </>
  );
};

export default Todos;
