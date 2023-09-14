import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, completedTodo } from "../../store/todos"; // Import the removeTodo action from your Redux slice
import styles from "./List.module.css";
import { increaseScore, reduceScore } from "../../store/score";

export const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: unknown) => state.todos.todos);

  const handleRemoveTodo = (todo: unknown) => {
    dispatch(removeTodo(todo.id));
    dispatch(reduceScore());
  };

  const handleCompleteTodo = (todo: unknown) => {
    console.log(todo);
    dispatch(completedTodo(todo.id));
    if (todo.completed) {
      dispatch(reduceScore());
    } else {
      dispatch(increaseScore());
    }
  };

  return (
    <div className={styles.todoContainer}>
      {todos.map(
        (
          todo:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | null
            | undefined,
          index: React.Key | null | undefined
        ) => (
          <ul className={styles.todoList}>
            <li
              key={index}
              className={todo.completed ? styles.todoCompleted : styles.todo}
            >
              {todo.text}
            </li>
            <div className={styles.todoButtons}>
              <input
                className={styles.completedButton}
                type="checkbox"
                onChange={() => handleCompleteTodo(todo)}
              />
              <button
                className={styles.crossButton}
                onClick={() => handleRemoveTodo(todo)}
              >
                X
              </button>
            </div>
          </ul>
        )
      )}
    </div>
  );
};
