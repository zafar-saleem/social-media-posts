import styles from "./styles.module.css";

export const Toggle = () => {
  return (
    <label className={styles.toggle}>
      <input type="checkbox" />
      <span className={styles.beep} />
    </label>
  )
}