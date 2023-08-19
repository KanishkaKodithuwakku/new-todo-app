import React from "react";
import Button from "./Button";

const TodoListItem = ({ text, handleOnClick }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {text} <Button btnText={`Delete`} handleOnClick={handleOnClick} />
    </li>
  );
};
export default TodoListItem;
