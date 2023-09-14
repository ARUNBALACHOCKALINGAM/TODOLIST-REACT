// store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todos';
import scoreReducer from './score';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    score: scoreReducer
    // Add other reducers here if needed
  },
});

export default store;
