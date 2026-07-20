import styles from "./styles.module.css";

export const MealLogger = () => {
  return (
    <div className={styles.card}>
      <h1>Quick Meal Logger</h1>

      <div className={styles.calories_list}>
        <div className={styles.chart}>
          <span>1,960</span>
          <span>Calories Left</span>
        </div>
        <ul className={styles.calories_left}>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(6 6 6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-drumstick-icon lucide-drumstick"><path d="M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23"/><path d="m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59"/></svg>
            <div>
              <span className={styles.value}>131g</span>
              <span className={styles.text}>Protiens Left</span>
            </div>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(6 6 6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hamburger-icon lucide-hamburger"><path d="M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25"/><path d="M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2"/><path d="M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0"/><path d="m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"/></svg>
            <div>
              <span className={styles.value}>101g</span>
              <span className={styles.text}>Carbs Left</span>
            </div>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(6 6 6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-droplet-icon lucide-droplet"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
            <div>
              <span className={styles.value}>68g</span>
              <span className={styles.text}>Fats Left</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}