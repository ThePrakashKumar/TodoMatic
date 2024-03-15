"use client";

import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  return (
    <div>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default TodoContainer;
