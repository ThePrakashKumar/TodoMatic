"use client";

import { Toaster } from "sonner";
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
      <Toaster position="bottom-center" closeButton />
    </div>
  );
};

export default TodoContainer;
