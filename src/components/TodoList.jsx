"use client";
import { useEffect, useState } from "react";
import Todo from "./Todo";
import { initializeTodo } from "@/lib/features/todo/todo.slice";
import Loader from "./Loader";
import NoTodo from "./NoTodo";
import ActiveTodoCount from "./ActiveTodoCount";

const { useSelector, useDispatch } = require("react-redux");

const TodoList = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    setIsLoading(true);
    const getInitialTodo = () => {
      if (typeof window !== "undefined") {
        const localTodo = window.localStorage.getItem("localTodoList");
        if (localTodo) {
          return JSON.parse(localTodo);
        } else {
          window.localStorage.setItem("localTodoList", JSON.stringify([]));
          return [];
        }
      }
    };

    const initialTodo = getInitialTodo();

    dispatch(
      initializeTodo({
        todo: initialTodo,
      })
    );
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : filteredTodo?.length === 0 ? (
        <>
          <ActiveTodoCount />
          <NoTodo />
        </>
      ) : (
        <>
          <ActiveTodoCount />
          {filteredTodo?.map((t) => (
            <Todo key={t.id} todoDetails={t} />
          ))}
        </>
      )}
    </div>
  );
};

export default TodoList;
