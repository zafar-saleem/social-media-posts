import styles from "../../SignUp.module.css";
import { TypeSteps } from "../../types";
import { positions } from "../../utils";

export const ProgressBar = ({ ...props }: TypeSteps) => {
  const {
    label,
  } = props;

  return (
    <section
      className={styles.form_progress}
      style={{ "--current-progress": positions[label].progress }}
    />
  )
}
