import styles from "./styles.module.css";

export const DailySteps = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(77 127 235)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-footprints-icon lucide-footprints"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"/><path d="M16 17h4"/><path d="M4 13h4"/></svg>
        <span className={styles.value}>3.29</span>
        <span className={styles.label}>Miles</span>
      </div>
      <div className={styles.card}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(255 95 0)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame-icon lucide-flame"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>
        <span className={styles.value}>240</span>
        <span className={styles.label}>Cal</span>
      </div>
      <div className={styles.card}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(8 113 89)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock-fading-icon lucide-clock-fading"><path d="M12 2a10 10 0 0 1 7.38 16.75"/><path d="M12 6v6l4 2"/><path d="M2.5 8.875a10 10 0 0 0-.5 3"/><path d="M2.83 16a10 10 0 0 0 2.43 3.4"/><path d="M4.636 5.235a10 10 0 0 1 .891-.857"/><path d="M8.644 21.42a10 10 0 0 0 7.631-.38"/></svg>
        <span className={styles.value}>82</span>
        <span className={styles.label}>Min</span>
      </div>
    </div>
  )
}