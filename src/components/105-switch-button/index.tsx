import styles from "./switch.module.css";

export const ButtonSwitch = () => {
  return (
    <label className={styles.button_switch}>
      <input type="checkbox" className={styles.switch_input} />
      <div className={styles.handle}>
        <span className={styles.off_icon}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(173 177 183)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-lock-icon lucide-lock`}>
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </span>
        <span className={styles.on_icon}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(13 177 112)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-check-icon lucide-check`}>
            <path d="M20 6 9 17l-5-5"/>
          </svg>
        </span>
      </div>
    </label>
  )
}