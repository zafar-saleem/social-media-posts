import Image from "next/image";
import styles from "./styles.module.css";

export const WalkingTracker = () => {
  return (
    <div className={styles.tracker}>
      <div className={styles.tracker_contents}>
        <div className={styles.tracker_header}>
          <div className={styles.group}>
            <span className={`${styles.label} ${styles.caps} ${styles.small}`}>Walk</span>
            <span className={styles.separator} />
            <span className={`${styles.caps} ${styles.timestamp} ${styles.small} ${styles.label}`}>10:23 AM</span>
            <button className={styles.button}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(156 158 169)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-icon lucide-ellipsis"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
            </button>
          </div>


          <span className={`${styles.large} ${styles.steps} ${styles.bold}`}>5,675</span>
          <span className={`${styles.label} ${styles.caps} ${styles.small}`}>Steps</span>
        </div>




        <div className={styles.chart}>
          <span className={`${styles.caps} ${styles.label} ${styles.small}`}>
            <span className={styles.highlight}>71%</span> of daily goal
          </span>

          <div className={styles.bar}>
            <div className={styles.current_progress} />
          </div>

          <div className={styles.stats}>
            <div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(215 215 215)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-route-icon lucide-route"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>
              <div>
                <span className={`${styles.highlight} ${styles.value} ${styles.smallest}`}>6.75</span>
                <span className={`${styles.caps} ${styles.smallest} ${styles.label}`}>KM</span>
              </div>
            </div>
            <div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(215 215 215)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame-icon lucide-flame"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>
              <div>
                <span className={`${styles.smallest} ${styles.value} ${styles.highlight}`}>1214</span>
                <span className={`${styles.caps} ${styles.smallest} ${styles.label}`}>kcal</span>
              </div>
            </div>
            
            <div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(215 215 215)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-timer-reset-icon lucide-timer-reset"><path d="M10 2h4"/><path d="M12 14v-4"/><path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"/><path d="M9 17H4v5"/></svg>
              <div>
                <span className={`${styles.smallest} ${styles.value} ${styles.highlight}`}>240</span>
                <span className={`${styles.caps} ${styles.smallest} ${styles.label}`}>min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}