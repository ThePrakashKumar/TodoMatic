import { deleteTodo, editTodo } from "@/lib/features/todo/todo.slice";
import { useState } from "react";
import {
  AiTwotoneCheckCircle,
  AiTwotoneDelete,
  AiTwotoneEdit,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
const Todo = ({ todoDetails }) => {
  const dispatch = useDispatch();
  const { id, complete, text, time } = todoDetails;

  const [update, setUpdate] = useState(false);
  const [newTodo, setNewTodo] = useState(text);

  const handleDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const handleEdit = (todo) => {
    if (update === false) {
      setUpdate((update) => !update);
    } else {
      dispatch(
        editTodo({
          id: todo.id,
          status: todo.status,
          text: newTodo,
          time: todo.time,
        })
      );
      setUpdate((update) => !update);
    }
  };
  return (
    <div className="flex">
      {update ? (
        <input
          type="text"
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
      ) : (
        <span>{text}</span>
      )}

      <button onClick={() => handleEdit(todoDetails)}>
        {update ? <AiTwotoneCheckCircle /> : <AiTwotoneEdit />}
      </button>
      <AiTwotoneDelete onClick={() => handleDelete(id)} />
    </div>
  );
};

export default Todo;
