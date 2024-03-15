"use client";
const { useSelector } = require("react-redux");

const TodoContainer = () => {
  const todo = useSelector((state) => state.todos);
  return (
    <div>
      <h1>Todo Container</h1>
    </div>
  );
};

export default TodoContainer;
