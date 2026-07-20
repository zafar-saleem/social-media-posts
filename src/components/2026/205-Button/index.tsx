import styles from "./styles.module.css";

export const ToTopButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles.button_icon}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-from-dot-icon lucide-arrow-up-from-dot"><path d="m5 9 7-7 7 7"/><path d="M12 16V2"/><circle cx="12" cy="21" r="1"/></svg>
      </span>
      <span className={styles.button_text}>To Top</span>
    </button>
  )
}