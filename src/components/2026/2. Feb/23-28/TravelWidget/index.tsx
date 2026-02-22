import Link from "next/link";
import styles from "./styles.module.css";

export const TravelWidget = () => {
  return (
    <div className={styles.widget}>
      <div className={styles.header}>
        <div className={styles.chip}>
          <span>Luxury Resort <span className={styles.divider} /> Tropicana</span>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.chip}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tent-tree-icon lucide-tent-tree"><circle cx="4" cy="4" r="2"/><path d="m14 5 3-3 3 3"/><path d="m14 10 3-3 3 3"/><path d="M17 14V2"/><path d="M17 14H7l-5 8h20Z"/><path d="M8 14v8"/><path d="m9 14 5 8"/></svg>
          <span className={styles.text}>All Inclusive</span>
        </div>
        <div className={styles.chip}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ship-icon lucide-ship"><path d="M12 10.189V14"/><path d="M12 2v3"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"/><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>
          <span className={styles.text}>Ocean Views</span>
        </div>
        <div className={styles.chip}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waves-ladder-icon lucide-waves-ladder"><path d="M19 5a2 2 0 0 0-2 2v11"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M7 13h10"/><path d="M7 9h10"/><path d="M9 5a2 2 0 0 0-2 2v11"/></svg>
          <span className={styles.text}>Outdoor Pool</span>
        </div>
        <Link href="#" className={styles.chip}>
          <span className={styles.text}>All 25 Features</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
      </div>
    </div>
  )
}