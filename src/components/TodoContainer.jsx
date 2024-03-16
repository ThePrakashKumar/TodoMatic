"use client";

import AddTodoForm from "./AddTodoForm";
import ButtonContainer from "./ButtonContainer";
import Navbar from "./Navbar";
import TodoList from "./TodoList";

const TodoContainer = () => {
  return (
    <div>
      <Navbar />
      <AddTodoForm />
      <ButtonContainer />
      <TodoList />
    </div>
  );
};

export default TodoContainer;
