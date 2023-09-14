import styles from "./Score.module.css";
import {useSelector} from 'react-redux';

export const Score = () => {
  const score = useSelector((state: {score:{score: number}}) => state.score.score);
  const todos = useSelector((state: {todos:{todos:[]}}) => state.todos.todos);
  return (
    <div className={styles.scoreContainer}>
        <h2>Your score is: {score} / {todos.length}</h2>
        <p>try to keep it to 5-6 things in your list each day</p>
    </div>
  )
}
