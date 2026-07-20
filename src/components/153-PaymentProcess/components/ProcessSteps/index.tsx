import styles from "../../PaymentProcess.module.css";
import { ComponentTitleProp } from "../../types";

export const ProcessSteps = ({ title }: ComponentTitleProp) => {
  return (
    <div className={styles.status_steps}>
      <div className={`${title === "review" && styles.current} ${styles.step_one}`}>
        <span className={styles.step_text}>1</span>
        <span className={styles.step_label}>Pay</span>
      </div>
      <div className={`${(title === "processing" || title === "confirmation") && styles.current} ${styles.step_two}`}>
        <span className={styles.step_text}>2</span>
        <span className={styles.step_label}>Processing</span>
      </div>
      <div className={`${title === "confirmation" && styles.current} ${styles.step_three}`}>
        <span className={styles.step_text}>3</span>
        <span className={styles.step_label}>Paid</span>
      </div>
    </div>
  )
}
