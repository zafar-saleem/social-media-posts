import Link from "next/link";
import styles from "./styles.module.css";

export const TrafficAnalytics = () => {
  return (
    <div className={styles.traffic}>
      <div className={styles.header}>
        <span className={styles.title}>Traffic Sources</span>
        <button className={styles.button_info}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(207 208 210)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        </button>
      </div>
      
      <div className={styles.stats}>
        <ul>
          <li>
            <span className={styles.organic} />
            <span className={styles.label}>Organic Search</span>
            <span className={styles.value}>6,890</span>
          </li>
          <li>
            <span className={styles.email} />
            <span className={styles.label}>Email Marketing</span>
            <span className={styles.value}>3,890</span>
          </li>
          <li>
            <span className={styles.social} />
            <span className={styles.label}>Social Media</span>
            <span className={styles.value}>2,890</span>
          </li>
        </ul>
        <div className={styles.chart} />
      </div>


      <Link href="#" className={styles.button}>More Details</Link>
    </div>
  )
}