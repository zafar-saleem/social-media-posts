import styles from "./styles.module.css";

export const Input = () => {
  return (
    <label className={styles.label}>
      <span className={styles.text}>Search</span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(115 115 115)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
      <input type="search" className={styles.input} />
    </label>
  )
}