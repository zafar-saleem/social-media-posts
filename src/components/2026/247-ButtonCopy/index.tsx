import styles from "./styles.module.css";

export const ButtonCopy = () => {
  return (
    <label className={styles.button_container}>
      <input type="checkbox" className={styles.input} />
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(156 156 156)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(156 156 156)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
    </label>
  )
}
