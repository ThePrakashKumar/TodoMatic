import { deleteTodo, editTodo } from "@/lib/features/todo/todo.slice";
import { useState } from "react";
import {
  AiTwotoneCheckCircle,
  AiTwotoneDelete,
  AiTwotoneEdit,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const Todo = ({ todoDetails }) => {
  const dispatch = useDispatch();
  const { id, completed, text, time } = todoDetails;

  const [update, setUpdate] = useState(false);
  const [newTodo, setNewTodo] = useState(text);
  const [checked, setChecked] = useState(completed);

  const handleDelete = (id) => {
    dispatch(deleteTodo({ id }));
    toast.success("Todo Deleted!", { duration: 1000 });
  };

  const handleEdit = (todo) => {
    if (update === false) {
      setUpdate((update) => !update);
    } else {
      dispatch(
        editTodo({
          id: todo.id,
          completed: todo.completed,
          text: newTodo,
          time: todo.time,
        })
      );
      setUpdate((update) => !update);
    }
  };

  const handleToggleTodo = (todo) => {
    setChecked((checked) => !checked);
    dispatch(
      editTodo({
        id: todo.id,
        completed: !checked,
        text: todo.text,
        time: todo.time,
      })
    );
  };

  return (
    <>
      <div className="flex max-w-[96%] mx-auto bg-white h-10 p-4 rounded mb-1 items-center">
        <input
          className="w-5 h-5 mr-2 text-red-60 rounded accent-slate-800 cursor-pointer "
          type="checkbox"
          checked={checked}
          onChange={() => handleToggleTodo(todoDetails)}
        />

        {update ? (
          <input
            className=" bg-slate-100 p-1 rounded w-full"
            type="text"
            value={newTodo}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          />
        ) : (
          <span className="w-full p-1">{text}</span>
        )}

        <button onClick={() => handleEdit(todoDetails)}>
          {update ? (
            <AiTwotoneCheckCircle className="text-2xl text-slate-800 ml-1 cursor-pointer" />
          ) : (
            <AiTwotoneEdit className="text-2xl text-slate-800 ml-1 cursor-pointer" />
          )}
        </button>
        <AiTwotoneDelete
          className="text-2xl text-slate-800 ml-1 cursor-pointer"
          onClick={() => handleDelete(id)}
        />
      </div>
    </>
  );
};

export default Todo;
