import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    filterStatus: "all",
    todo: [],
  },
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
    initializeTodo: (state, action) => {
      state.todo = action.payload.todo;
    },
    filterTodo: (state, action) => {
      state.filterStatus = action.payload.filter;
    },
  },
});

export const { addTodo, deleteTodo, editTodo, filterTodo, initializeTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
