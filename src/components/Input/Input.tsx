import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todos';

import styles from './Input.module.css';

const Input = () => {
  const [todoText, setTodoText] = useState(''); // Use state to manage the input value
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(addTodo({text:todoText}));
      setTodoText(''); // Reset the input field after adding todo
    }
  };

  

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.todoInput}
        type="text"
        placeholder="Add Todo"
        value={todoText}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo} className={styles.addButton}>
        +
      </button>
    </div>
  );
};

export default Input;
