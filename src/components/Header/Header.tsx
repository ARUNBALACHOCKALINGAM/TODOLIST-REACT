import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.headingContainer}>
      <h1 className={styles.heading}>TODOs but gamified 🎮</h1>
    </div>
  );
}
