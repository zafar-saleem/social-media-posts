import styles from "./styles.module.css";

export const FlightStatus = () => {
  return (
    <section className={styles.flight_container}>
      <div className={styles.box}>
        <span className={styles.title}>JFK</span>
        <span className={styles.city}>New York</span>
        <span className={styles.time}>
          <span className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(156 160 168)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock-icon lucide-clock"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
          </span>
          <span>3:20 PM</span>
        </span>
      </div>
      <div className={`${styles.box} ${styles.separator}`}>
        <span className={styles.separator_title}>ON TIME</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(255 84 10)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane-icon lucide-plane"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
        <span className={styles.duration}>6h 10m</span>
      </div>
      <div className={styles.box}>
        <span className={styles.title}>LAX</span>
        <span className={styles.city}>Los Angeles</span>
        <span className={styles.time}>
          <span className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(156 160 168)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock-icon lucide-clock"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
          </span>
          <span className={styles.text}>09:40 PM</span>
        </span>
      </div>
    </section>
  )
}