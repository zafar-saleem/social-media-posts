import styles from "./cta.module.css";

export const Button = () => {
  return (
    <button className={styles.button}>
      <span className={styles.button_label}>Book A Call</span>
      <p className={`${styles.button_avatar} ${styles.button_host_avatar}`} />
      <span className={styles.button_symbol}>+</span>
      <p className={`${styles.button_avatar} ${styles.button_client_avatar}`}>You</p>
    </button>
  )
}
