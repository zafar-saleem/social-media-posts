import styles from "./styles.module.css";

export const FitnessDayStreak = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div>
          <span className={styles.title}>4 day streak</span>
          <button className={styles.btn_info}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(162 162 162)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </button>
        </div>
        <p className={styles.text}>You're on fire! You've been at it for 4 days in a row.</p>
      </div>
      <svg width="64" height="64" viewBox="0 0 24 24" fill="rgb(248 151 24)" stroke="none" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
      <div className={styles.box}>
        <div className={styles.group}>
          <span className={styles.label}>T</span>
          <span className={`${styles.done} ${styles.indicator}`} />
        </div>
        <div className={styles.group}>
          <span className={styles.label}>W</span>
          <span className={`${styles.done} ${styles.indicator}`} />
        </div>
        <div className={styles.group}>
          <span className={styles.label}>T</span>
          <span className={`${styles.done} ${styles.indicator}`} />
        </div>
        <div className={styles.group}>
          <span className={styles.label}>F</span>
          <span className={`${styles.done} ${styles.indicator}`} />
        </div>
        <div className={styles.group}>
          <span className={styles.label}>S</span>
          <span className={`${styles.indicator}`} />
        </div>
        <div className={styles.group}>
          <span className={styles.label}>S</span>
          <span className={`${styles.indicator}`} />
        </div>
        <div className={styles.group}>
          <span className={styles.label}>M</span>
          <span className={`${styles.indicator}`} />
        </div>
      </div>
    </div>
  )
}