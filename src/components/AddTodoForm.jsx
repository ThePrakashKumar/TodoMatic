"use client";
import { addTodo } from "@/lib/features/todo/todo.slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

const AddTodoForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    if (todo) {
      dispatch(
        addTodo({
          id: uuid(),
          complete: false,
          text: todo,
          time: new Date().toLocaleString(),
        })
      );
      setTodo("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add Todo"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={(e) => handleAdd(e)}>Add</button>
    </div>
  );
};

export default AddTodoForm;
