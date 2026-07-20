import styles from "./styles.module.css";

const DATA = {
  "order_confirmed": {
    label: "Order Cofirmed",
    text: "Order placed & confirmed",
    timestamp: "Jan 25, 9:00",
    status: "done",
  },
  "shipping": {
    label: "Shipping",
    text: "Packed & handed",
    timestamp: "Jan 27, 13:00",
    status: "active",
  },
  "transit": {
    label: "Transit",
    text: "Order is in transit",
    timestamp: "Jan 28",
    status: "inactive",
  },
  "delivered": {
    label: "Delivered",
    text: "Order delivered to customer",
    timestamp: "Jan 29",
    status: "inactive",
  },
  current_status: {
    step: 4,
    progress: 75,
  },
}

export const DeliveryStatus = () => {
  return (
    <div className={styles.delivery}>
      <header className={styles.delivery_header}>
        <h1 className={styles.delivery_title}>Delivery Status</h1>
        <button className={styles.refresh_button}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(2 2 2)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-ccw-dot-icon lucide-refresh-ccw-dot"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/><circle cx="12" cy="12" r="1"/></svg>
          <span className={styles.button_label}>Refresh</span>
        </button>
        <p className={styles.delivery_progress}>
          <span className={styles.progress_value}>{DATA.current_status.progress + 25}</span><span className={styles.progress_unit}>%</span>
        </p>

        <div className={styles.delivery_progressbar} style={{ "--progress": `${DATA.current_status.progress}%`}}>
          <div className={`${styles.scale} ${DATA.current_status.step === 1 && styles.current} ${DATA.current_status.step > 1 && styles.active}`} />
          <div className={`${styles.scale} ${DATA.current_status.step === 2 && styles.current} ${DATA.current_status.step > 2 && styles.active}`} />
          <div className={`${styles.scale} ${DATA.current_status.step === 3 && styles.current} ${DATA.current_status.step > 3 && styles.active}`} />
          <div className={`${styles.scale} ${DATA.current_status.step === 4 && styles.current} ${DATA.current_status.step > 4 && styles.active}`} />
        </div>
      </header>




      <main className={styles.box}>
        <div className={`${styles.group} ${DATA.current_status.step === 1 && styles.current} ${DATA.current_status.step > 1 && styles.active}`}>
          <div className={styles.group_icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(1 1 1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handbag-icon lucide-handbag"><path d="M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z"/><path d="M8 11V6a4 4 0 0 1 8 0v5"/></svg>
          </div>
          <span className={styles.group_label}>{DATA.order_confirmed.label}</span>
          <span className={styles.group_text}>{DATA.order_confirmed.text}</span>
          <span className={styles.group_timestamp}>{DATA.order_confirmed.timestamp}</span>
        </div>
        
        
        <div className={`${styles.group} ${DATA.current_status.step === 2 && styles.current} ${DATA.current_status.step > 2 && styles.active}`}>
          <div className={styles.group_icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(1 1 1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-container-icon lucide-container"><path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"/><path d="M10 21.9V14L2.1 9.1"/><path d="m10 14 11.9-6.9"/><path d="M14 19.8v-8.1"/><path d="M18 17.5V9.4"/></svg>
          </div>
          <span className={styles.group_label}>{DATA.shipping.label}</span>
          <span className={styles.group_text}>{DATA.shipping.text}</span>
          <span className={styles.group_timestamp}>{DATA.shipping.timestamp}</span>
        </div>
        
        
        
        <div className={`${styles.group} ${DATA.current_status.step === 3 && styles.current} ${DATA.current_status.step > 3 && styles.active}`}>
          <div className={styles.group_icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(1 1 1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck-icon lucide-truck"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
          </div>
          <span className={styles.group_label}>{DATA.transit.label}</span>
          <span className={styles.group_text}>{DATA.transit.text}</span>
          <span className={styles.group_timestamp}>{DATA.transit.timestamp}</span>
        </div>
        
        
        <div className={`${styles.group} ${DATA.current_status.step === 4 && styles.current} ${DATA.current_status.step > 4 && styles.active}`}>
          <div className={styles.group_icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(1 1 1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-check-icon lucide-package-check"><path d="M12 22V12"/><path d="m16 17 2 2 4-4"/><path d="M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753"/><path d="M3.29 7 12 12l8.71-5"/><path d="m7.5 4.27 8.997 5.148"/></svg>
          </div>
          <span className={styles.group_label}>{DATA.delivered.label}</span>
          <span className={styles.group_text}>{DATA.delivered.text}</span>
          <span className={styles.group_timestamp}>{DATA.delivered.timestamp}</span>
        </div>
      </main>

      <footer className={styles.delivery_footer}>
        <button className={styles.rate_button}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(1 1 1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
          <span className={styles.button_label}>Rate this delivery</span>
        </button>
      </footer>
    </div>
  )
}