import styles from "./styles.module.css";

export const Tabs = () => {
  return (
    <nav className={styles.tabs}>
      <ul>
        <li>
          <label>
            <input type="radio" name="tab" />
            <span>Today</span>
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="tab" />
            <span>3 months</span>
            <span className={styles.active} />
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="tab" />
            <span>6 months</span>
          </label>
        </li>
      </ul>
    </nav>
  )
}