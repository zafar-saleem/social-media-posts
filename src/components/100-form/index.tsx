import styles from "./form.module.css";

export const Form = () => {
  return (
    <form className={styles.container}>
      <h1 className={styles.title}>Adventure Awaits - At The Best Prices</h1>
      <p className={styles.description}>
        Find the best discounts on flights, hotels and experiences worldwide!
      </p>

      <label className={styles.field_container}>
        
        <input type="text" placeholder="Location" />
        <span className={styles.icon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(81 100 109)" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pinned-icon lucide-map-pinned">
            <path className={styles.location_icon} d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/>
            <circle className={styles.location_icon} cx="12" cy="8" r="2"/>
            <path className={styles.map} d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"/>
          </svg>
        </span>
      </label>
      
      <label className={styles.field_container}>
        
        <input type="text" placeholder="Departure" />
        <span className={styles.icon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(81 100 109)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-arrow-up-icon lucide-calendar-arrow-up">
            <path className={styles.arrow} d="m14 18 4-4 4 4"/>
            <path d="M16 2v4"/>
            <path className={styles.arrow} d="M18 22v-8"/>
            <path d="M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9"/>
            <path d="M3 10h18"/>
            <path d="M8 2v4"/>
          </svg>
        </span>
      </label>
      
      <label className={styles.field_container}>
        
        <input type="text" placeholder="Return" />
        <span className={styles.icon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(81 100 109)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-arrow-down-icon lucide-calendar-arrow-down">
            <path className={styles.return} d="m14 18 4 4 4-4"/>
            <path d="M16 2v4"/>
            <path className={styles.return} d="M18 14v8"/>
            <path d="M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343"/>
            <path d="M3 10h18"/>
            <path d="M8 2v4"/>
          </svg>
        </span>
      </label>

      <button className={`button_one ${styles.button}`}>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(162 168 181)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
        </span>
        <span>Submit</span>
      </button>
    </form>
  )
}