import styles from "./styles.module.css";

export const CTAButton = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <span className={styles.button_label}>Book a Call</span>
      </button>
    </div>
  )
}