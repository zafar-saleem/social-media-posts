import styles from "../../SignUp.module.css";
import { TypeSteps } from "../../types";

export const SignupSteps = ({ ...props }: TypeSteps) => {
  const {
    label,
  } = props;

  return (
    <section className={styles.steps_container}>
      <div className={`${label === "info" && styles.checked} ${styles.step}`}>
        <span className={styles.step_block}>1</span>
        <span className={styles.step_label}>Personal info</span>
      </div>
      <div className={`${label === "contact" && styles.checked} ${styles.step}`}>
        <span className={styles.step_block}>2</span>
        <span className={styles.step_label}>Contact</span>
      </div>
      <div className={`${label === "security" && styles.checked} ${styles.step}`}>
        <span className={styles.step_block}>3</span>
        <span className={styles.step_label}>Security</span>
      </div>
      <div className={`${label === "review" && styles.checked} ${styles.step}`}>
        <span className={styles.step_block}>4</span>
        <span className={styles.step_label}>Review</span>
      </div>
    </section>
  )
}
