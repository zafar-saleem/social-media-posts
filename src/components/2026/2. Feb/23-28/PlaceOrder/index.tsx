import styles from "./styles.module.css";

export const PlaceOrder = () => {
  return (
    <div className={styles.order}>
      <span className={styles.title}>Your Order</span>
      <button className={styles.btn_order}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-icon lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>
        <span className={styles.label}>Place Order</span>
      </button>
      <div className={styles.block}>
        <div className={styles.icon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(81 81 81)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coffee-icon lucide-coffee"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/></svg>
        </div>
        <div className={styles.group}>
          <span className={styles.text}>Capuccino</span>
          <span className={styles.value}>$2.50</span>
        </div>
      </div>
    </div>
  )
}