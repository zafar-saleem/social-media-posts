import styles from "./styles.module.css";

export const ButtonLanguage = () => {
  return (
    <label className={styles.button_language}>
      <input type="checkbox" className={styles.input} />
      <span className={styles.text_jp}>JP</span>
      <span className={styles.text_en}>EN</span>
    </label>
  )
}