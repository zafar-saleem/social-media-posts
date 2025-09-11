import styles from "./toggle.module.css";

export const Toggle = () => {
  return (
    <>
      <label className={styles.toggle}>
        <input type="checkbox" className={styles.toggle_field} />
      </label>
    </>
  )
}