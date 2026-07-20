import styles from "./dotted-button.module.css";

export const ButtonDotted = () => {
  return (
    <button className={styles.button}>
      <div className={styles.button_label_container}>
        <p className={styles.button_dot_container}>
          <span className={`${styles.dot} ${styles.dot_orange}`} />
          {/* <span className={`${styles.dot} ${styles.dot_purple}`} />
          <span className={`${styles.dot} ${styles.dot_pink}`} /> */}
        </p>
        <span className={styles.button_label}>color - tunes</span>
      </div>
      <div className={styles.button_label_container}>
        <p className={styles.button_dot_container}>
          <span className={`${styles.dot} ${styles.dot_pink}`} />
          <span className={`${styles.dot} ${styles.dot_purple}`} />
          <span className={`${styles.dot} ${styles.dot_orange}`} />
        </p>
        <span className={styles.button_label}>color - tunes</span>
      </div>
    </button>
  )
}