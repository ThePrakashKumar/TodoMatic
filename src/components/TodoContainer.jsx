"use client";

import ActiveTodoCount from "./ActiveTodoCount";
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
      <ActiveTodoCount />
      <TodoList />
    </div>
  );
};

export default TodoContainer;
