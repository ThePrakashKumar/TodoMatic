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
      let localTodo = window.localStorage.getItem("localTodoList");
      if (localTodo) {
        let localTodoArray = JSON.parse(localTodo);
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
    deleteTodo: (state, action) => {
      let localTodo = window.localStorage.getItem("localTodoList");
      if (localTodo) {
        let localTodoArray = JSON.parse(localTodo);
        let updatedTodoArray = localTodoArray.filter(
          (todo) => todo.id !== action.payload.id
        );
        window.localStorage.setItem(
          "localTodoList",
          JSON.stringify(updatedTodoArray)
        );
        state.todo = updatedTodoArray;
      }
    },
    editTodo: (state, action) => {
      let localTodo = window.localStorage.getItem("localTodoList");
      if (localTodo) {
        let localTodoArray = JSON.parse(localTodo);
        let updatedTodoArray = localTodoArray.map((todo) => {
          if (todo.id === action.payload.id) {
            return action.payload;
          } else {
            return todo;
          }
        });

        window.localStorage.setItem(
          "localTodoList",
          JSON.stringify(updatedTodoArray)
        );
        state.todo = updatedTodoArray;
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
