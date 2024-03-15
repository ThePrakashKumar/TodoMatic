import { createSlice } from "@reduxjs/toolkit";

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

const initialState = {
  filterStatus: "all",
  todo: getInitialTodo(),
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
      const localTodo = window.localStorage.getItem("localTodoList");
      if (localTodo) {
        const localTodoArray = JSON.parse(localTodo);
        localTodoArray.push({
          ...action.payload,
        });
        window.localStorage.setItem(
          "localTodoList",
          JSON.stringify(localTodoArray)
        );
      } else {
        window.localStorage.setItem(
          "localTodoList",
          JSON.stringify([{ ...action.payload }])
        );
      }
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
