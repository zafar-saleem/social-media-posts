import styles from "./styles.module.css";

export const ToggleButton = () => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input type="radio" name="toggle" defaultChecked className={styles.input} />
        <div className={styles.icon}>
          <div />
          <div />
          <div />
        </div>
        <span className={styles.text}>Shelf</span>
      </label>
      <label className={styles.label}>
        <input type="radio" name="toggle" className={styles.input} />
        <div className={styles.icon}>
          <div />
          <div />
          <div />
        </div>
        <span className={styles.text}>Spines</span>
      </label>
    </div>
  )
}