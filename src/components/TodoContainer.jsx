"use client";

import AddTodoForm from "./AddTodoForm";
import ButtonContainer from "./ButtonContainer";
import TodoList from "./TodoList";

const TodoContainer = () => {
  return (
    <div>
      <AddTodoForm />
      <ButtonContainer />
      <TodoList />
    </div>
  );
};

export default TodoContainer;
