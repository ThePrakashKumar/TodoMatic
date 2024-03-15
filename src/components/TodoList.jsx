"use client";

import Todo from "./Todo";

const { useSelector } = require("react-redux");

const TodoList = () => {
  const { todo, filterStatus } = useSelector((state) => state.todos);

  const filteredTodo = todo?.filter((t) => {
    if (filterStatus === "active") {
      return t.completed === false;
    } else if (filterStatus === "completed") {
      return t.completed === true;
    } else {
      return true;
    }
  });
  console.log(filteredTodo, filterStatus);
  return (
    <div>
      {filteredTodo?.length !== 0 ? (
        <div>
          {filteredTodo?.map((t) => (
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
