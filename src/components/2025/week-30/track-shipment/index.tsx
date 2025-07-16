import styles from "./shipment.module.css";

export const TrackShipment = () => {
  return (
    <div className={styles.shipment}>
      <button className={`${styles.btn} ${styles.btn_shipment}`}>
        <span className={styles.icon}>
          <svg
            width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor"
            strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-package-icon lucide-package">
              <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/>
              <path d="M12 22V12"/>

              <polyline points="3.29 7 12 12 20.71 7"/>
              <path d="m7.5 4.27 9 5.15" className={styles.box_top}/>
          </svg>
        </span>
        <span className={styles.label}>Track package</span>
      </button>
      <p className={styles.status}>
        <span>
          <span>Arrives in 2d</span> <span>.</span> <span>In transit</span>
        </span>
        <progress value="75" max="100" />
      </p>
    </div>
  )
}