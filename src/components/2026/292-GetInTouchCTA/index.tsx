import styles from "./styles.module.css";

export const GetInTouchCTA = () => {
  return (
    <button className={styles.button}>
      <span className={styles.button_label}>Get in touch</span>
      <div className={styles.button_circle} />
      <div className={styles.button_circle} />
      <div className={styles.button_circle} />
    </button>
  )
}