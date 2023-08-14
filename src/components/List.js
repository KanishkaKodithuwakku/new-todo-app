import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const List = () => {
  const { todos } = useContext(TodoContext);

  if (!todos) { 
    toast.error('Empty')
    return
  }

  return (
    <div className="row">
      <div className="col-sm-6">
        <ul className="list-group">
          <ToastContainer />

          {todos &&
            todos.map((t, index) => (
              <li key={index} className="list-group-item">
                {t}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
