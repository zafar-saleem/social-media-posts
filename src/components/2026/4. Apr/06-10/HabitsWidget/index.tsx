import styles from "./styles.module.css";

export const HabitsWidget = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Today's Habits</h1>
      <ul>
        <li>
          <label>
            <input type="checkbox" />
            <span className={styles.text}>Vitamins</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <span className={styles.text}>Evening walk</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <span className={styles.text}>Morning stretch</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <span className={styles.text}>Meditation 10 mins</span>
          </label>
        </li>
      </ul>
      <button className={styles.btn}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(161 161 161)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        <span className={styles.label}>Add habit</span>
      </button>
    </div>
  )
}
