// slices/todoSlice.js

import { createSlice } from '@reduxjs/toolkit';

let nextCounterId = 1;

const initialState = {
  todos: [
    { id: 1, text: "Example Todo 1", completed: false},
  ],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: ++nextCounterId,
        text: action.payload.text,
        completed: false
      });
    },
    removeTodo: (state, action) => {
      const todoIndex = state.todos.findIndex(todo => todo.id === action.payload);
      if (todoIndex !== -1) {
        state.todos.splice(todoIndex, 1);
      }
    },
    // Define the COMPLETED reducer
    completedTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    // Define other reducers like toggleTodo, etc.
  },
});

export const { addTodo, removeTodo,completedTodo } = todoSlice.actions;
export default todoSlice.reducer;
