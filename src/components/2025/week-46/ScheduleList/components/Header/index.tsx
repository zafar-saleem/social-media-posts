import { MONTHS } from "../../constants";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h3>
        <select defaultValue={MONTHS[new Date().getMonth()]}>
          {
            MONTHS.map((month, index) => (
              <option key={index}>{month}</option>
            ))
          }
        </select> {new Date().getFullYear()}
      </h3>
    </header>
  )
}
