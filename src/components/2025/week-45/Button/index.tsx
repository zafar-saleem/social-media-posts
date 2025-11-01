import styles from "./styles.module.css";

export const Button = () => {
  return (
    <button className={styles.button}>
      <span className={`${styles.icon} ${styles.initial_icon}`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
      </span>
      <span className={styles.button_label}>Buy now</span>
      <span className={`${styles.icon} ${styles.result_icon}`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
      </span>
    </button>
  )
}