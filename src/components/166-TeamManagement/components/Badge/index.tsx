import styles from "../../styles.module.css";

export const Badge = ({ counter }: { counter: number }) => {
  return (
    <span className={styles.counter_label}>
      {counter} left
    </span>
  )
}