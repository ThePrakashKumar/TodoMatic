import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todo: [
      {
        id: 1,
        text: "text",
        completed: true,
      },
    ],
  },
  reducers: {
    addTodo: (state) => {
      state.todo.push();
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
