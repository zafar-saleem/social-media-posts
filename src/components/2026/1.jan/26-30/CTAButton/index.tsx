import styles from "./styles.module.css";

export const CTAButton = () => {
  return (
    <button className={styles.button}>
      <span className={`${styles.border} ${styles.border_top_left}`} />
      <span className={`${styles.border} ${styles.border_top_right}`} />
      <span className={`${styles.border} ${styles.border_bottom_right}`} />
      <span className={`${styles.border} ${styles.border_bottom_left}`} />
      <span className={styles.button_label}>Get In Touch</span>
    </button>
  )
}