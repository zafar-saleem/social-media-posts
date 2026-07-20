import { DAYS } from "../../../../constants";
// import styles from "../../../../styles.module.css";
import styles from "./styles.module.css";

export const CalendarDaysLabels = () => {
  return (
    <div className={styles.day_labels}>
      {
        DAYS.map((day, index) => (
          <span key={index}>{day.label}</span>
        ))
      }
    </div>
  )
}