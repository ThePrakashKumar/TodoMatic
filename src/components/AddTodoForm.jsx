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
          completed: false,
          text: todo,
          time: new Date().toLocaleString(),
        })
      );
      setTodo("");
    }
  };

  return (
    <form className="max-w-[96%] mx-auto bg-slate-100">
      <input
        className="w-[80%] p-2 outline-none rounded-l"
        type="text"
        placeholder="Add Todo"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        className="w-[20%] bg-slate-800 h-10 text-slate-50 text-inherit hover:text-slate-800 hover:bg-slate-400 transition-all rounded-r"
        onClick={(e) => handleAdd(e)}
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
