"use client";

import Todo from "./Todo";

const { useSelector } = require("react-redux");

const TodoList = () => {
  const todo = useSelector((state) => state.todos.todo);
  console.log(todo);
  return (
    <div>
      {todo?.length !== 0 ? (
        <div>
          {todo?.map((t) => (
            <Todo key={t.id} todoDetails={t} />
          ))}
        </div>
      ) : (
        <h2>No Todo</h2>
      )}
    </div>
  );
};

export default TodoList;
