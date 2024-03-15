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
  const { id, completed, text, time } = todoDetails;

  const [update, setUpdate] = useState(false);
  const [newTodo, setNewTodo] = useState(text);
  const [checked, setChecked] = useState(completed);

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
    <div className="flex">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleToggleTodo(todoDetails)}
      />

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
