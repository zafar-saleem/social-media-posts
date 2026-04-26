import styles from "./styles.module.css";

export const DietToggleButton = () => {
  return (
    <div className={styles.container}>
      <label className={styles.toggle_button}>
        <input type="checkbox" className={styles.toggle_input} />
        <div className={styles.toggle_handle}>
          <p>
            <span>Non veg</span>
            <span>Veg</span>
          </p>
        </div>
        <div className={styles.greens} />
        <div className={styles.chicken_leg} />
        <div className={styles.egg} />
      </label>
      <div className={styles.chicken_bone} />
      <div className={styles.leaf} />
      <div className={styles.small_leaf}>
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}