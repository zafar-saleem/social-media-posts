import styles from "./button.module.css";

export const Button = () => {
  return (
    <button className={`${styles.button}`}>
      <div className={styles.button_icon_grid}>
        <span className={styles.button_hovered_label}>Say Hello!</span>
        <span className={styles.icon}>→</span>
      </div>
      <span className={styles.button_regular_label}>Contact us</span>
    </button>
  )
}
