import styles from "./styles.module.css";

export const ButtonMenu = () => {
  return (
    <label className={styles.button}>
      <input type="checkbox" />
      <span className={styles.text}>Menu</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <path d="M12 5 v6" />
        <path d="M12 13 v6" />
        <path d="M5 12 h6" />
        <path d="M13 12 h6" />
      </svg>
    </label>
  )
}
