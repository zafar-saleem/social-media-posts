import styles from "./styles.module.css";

export const FitnessStepCounter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <svg width="84" height="84" viewBox="0 0 24 24" fill="rgb(64 241 121)" stroke="none" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame-icon lucide-flame"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>
        <div>
          <span className={styles.title}>Streak</span>
          <div>
            <span className={styles.value}>32</span>
            <span className={styles.label}>Days</span>
          </div>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(198 198 198)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-footprints-icon lucide-footprints"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"/><path d="M16 17h4"/><path d="M4 13h4"/></svg>
        </div>
      </div>



      <div className={styles.days}>
        <div className={styles.day}>
          <div className={`${styles.done} ${styles.chart}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
          </div>
          <span className={styles.label}>Mon</span>
        </div>
        <div className={styles.day}>
          <div className={`${styles.done} ${styles.chart}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
          </div>
          <span className={styles.label}>Tue</span>
        </div>
        <div className={styles.day}>
          <div className={`${styles.done} ${styles.chart}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
          </div>
          <span className={styles.label}>Wed</span>
        </div>
        <div className={styles.day}>
          <div className={`${styles.progress} ${styles.chart}`} />
          <span className={styles.label}>Thu</span>
        </div>
        <div className={styles.day}>
          <div className={styles.chart} />
          <span className={styles.label}>Fri</span>
        </div>
        <div className={styles.day}>
          <div className={styles.chart} />
          <span className={styles.label}>Sat</span>
        </div>
        <div className={styles.day}>
          <div className={styles.chart} />
          <span className={styles.label}>Sun</span>
        </div>
      </div>





      <div className={styles.steps}>
        <span className={styles.label}>STEPS</span>
        <div>
          <span className={styles.value}>6890</span> <span className={styles.total}>/10,000</span>
          <span className={styles.percentage}>68%</span>
        </div>

        <div className={styles.progress} />
      </div>
    </div>
  )
}