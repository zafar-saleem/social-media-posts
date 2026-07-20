import { DAYS } from "../../../../constants";
import styles from "./styles.module.css";
import { getDaysInMonth } from "../../../../utils";
import { DayEventIndicators } from "../DayEventIndicators";

export const DaysInMonth = () => {
  return (
    <div className={styles.days_container}>
      {
        getDaysInMonth(new Date().getMonth(), new Date().getFullYear())
          .map((date, index) => (
            <label
              key={index}
              className={`
                ${styles[DAYS[date.getDay()].label]}
                ${styles.day_text}
                ${date.getDate() === new Date().getDate() && styles.current_day}
              `}>
                <input type="radio" name="day" />
                <span>{date.getDate()}</span>
                <DayEventIndicators date={date} />
            </label>
          ))
      }
    </div>
  )
}
