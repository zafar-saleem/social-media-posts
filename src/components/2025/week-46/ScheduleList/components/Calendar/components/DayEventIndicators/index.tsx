import { EVENTS } from "../../../../data";
import styles from "./styles.module.css";

export const DayEventIndicators = ({ date }) => {
  return (
    <span className={styles.indicators}>
    {
      EVENTS.map((d, i) => new Date(d.date).getDate() === date.getDate() && <span
          key={i}
          className={styles.event}
        />
      )
    }
    </span>
  )
}
