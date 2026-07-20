import styles from "./trip.module.css";

export const TripCard = () => {
  return (
    <div className={styles.card}>
      <article className={styles.content}>
        <span className={styles.title_section}>
          <h1 className={styles.title}>Ireland 5-Day Trip</h1>
          <span className={styles.trip_price}>$750</span>
        </span>
        <p className={styles.text}>
          Explore the magic of Ireland in five unforgettable days! From Dublin's vibrant 
          streets to the breath taking cliffs of Moher, experience castles & more.
        </p>
        <section className={styles.trip_tags}>
          <span className={styles.tag}>Nature</span>
          <span className={styles.tag}>5-day stay</span>
        </section>
        <button className={`button_two ${styles.button}`}>
          <div>
            <span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(188 188 188)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-user-icon lucide-book-user">
                <path d="M15 13a3 3 0 1 0-6 0"/>
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>
                <circle cx="12" cy="8" r="2"/>
              </svg>
            </span>
            <span>Reserve</span>
          </div>
          <div>
            <span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(55 61 61)" stroke="rgb(188 188 188)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-user-icon lucide-book-user">
                <path d="M15 13a3 3 0 1 0-6 0"/>
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>
                <circle cx="12" cy="8" r="2"/>
              </svg>
            </span>
            <span>Reserve</span>
          </div>
        </button>
      </article>
    </div>
  )
}