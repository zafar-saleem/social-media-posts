import styles from "./flight.module.css";

// PLAN: 
// PLAN GREY: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(169 169 169)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plane-icon lucide-plane"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>

export const FlightDetails = () => {
  return (
    <div className={styles.flight_details}>
      <div className={styles.flight}>
        <div className={styles.flight_summary}>
          <span className={styles.summary_title}>Flight Summary:</span>
          <span className={styles.class}>Economy</span>
        </div>
        <div className={styles.flight_meta}>
          <span className={styles.meta_passenger}>2 adults, 1 child</span>
          <section>
            <span className={styles.badge}>-8%</span>
            <span className={styles.price}>$1342</span>
          </section>
        </div>
      </div>


      <div className={styles.flight_progress}>
        <span className={styles.flight_departure}>LCY</span>
        <progress value="5" max="10" className={styles.progress}></progress>
        <span className={styles.icon_plan}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="rgb(38 38 38)"
            stroke="rgb(38 38 38)"
            strokeWidth="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-plane-icon lucide-plane"
          >
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
          </svg>
        </span>
        <span className={styles.flight_destination}>JFK</span>
      </div>



      
      <nav className={styles.flight_tabs}>
        <ul className={styles.tabs}>
          <li className={styles.btn_container}>
            <button className={`${styles.active} ${styles.btn_tab} button_one`}>
              <span className={styles.icon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(169 169 169)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucide-plane-icon lucide-plane ${styles.icon_svg}`}
                >
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
                </svg>
              </span>
              <span className={styles.tab_label}>Flight</span>
            </button>
          </li>
          <li className={styles.btn_container}>
            <button className={`button_one ${styles.btn_tab}`}>
              <span className={styles.icon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(169 169 169)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucide-hotel-icon lucide-hotel ${styles.icon_svg}`}
                >
                  <path d="M10 22v-6.57"/>
                  <path d="M12 11h.01"/>
                  <path d="M12 7h.01"/>
                  <path d="M14 15.43V22"/>
                  <path d="M15 16a5 5 0 0 0-6 0"/>
                  <path d="M16 11h.01"/>
                  <path d="M16 7h.01"/>
                  <path d="M8 11h.01"/>
                  <path d="M8 7h.01"/>
                  <rect x="4" y="2" width="16" height="20" rx="2"/>
                </svg>
              </span>
              <span className={styles.tab_label}>Hotel</span>
            </button>
          </li>
          <li className={styles.btn_container}>
            <button className={`button_one ${styles.btn_tab}`}>
              <span className={styles.icon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(169 169 169)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucide-package-open-icon lucide-package-open ${styles.icon_svg}`}
                >
                  <path d="M12 22v-9"/>
                  <path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"/>
                  <path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"/>
                  <path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"/>
                </svg>
              </span>
              <span className={styles.tab_label}>Package booking</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}