import styles from "./styles.module.css";
import { DATA } from "./data";

export const CinemaTicketBooking = () => {
  return (
    <div className={styles.container}>
      <h1>Where do you want to sit?</h1>
      <p className={styles.info}>Select Seat</p>
      <iframe
        width="560" height="315"
        src="https://www.youtube.com/embed/QRfj1VCg16Y?si=hoBBFFSlN-1wysMd"
        title="YouTube video player" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className={styles.screen}
      >  
      </iframe>
      <div className={styles.grid}>
        {
          DATA.map((item) => (
            <label key={item.id}>
              <div className={styles.tooltip}>
                <span className={styles.label}>Row</span> <span>{item.row}</span> - <span className={styles.label}>Seat</span> <span>{item.seat}</span>
              </div>
              <input type="checkbox" defaultChecked={item.isBooked} />
              {
                !item.isBooked
                ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(46 47 41)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-armchair-icon lucide-armchair"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(139 139 139)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-armchair-icon lucide-armchair"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>

              }
            </label>
          ))
        }
      </div>
    </div>
  )
}
