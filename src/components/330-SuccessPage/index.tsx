import styles from "./styles.module.css";

export const SuccessPage = () => {
  return (
    <div className={styles.success}>
      <svg width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="rgb(47 95 23)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-smile-icon lucide-smile">
        {/* <circle cx="12" cy="12" r="10"/> */}
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" x2="9.01" y1="9" y2="9"/>
        <line x1="15" x2="15.01" y1="9" y2="9"/>
      </svg>
      <h1 className={styles.success_title}>
        <span className={styles.title_small}>$</span>
        1,000
      </h1>
      <p className={styles.success_text}>
        <span>Deposited with</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-icon lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>
      </p>
      <span className={styles.success_hash}>0x1234***2325</span>
      <div className={styles.success_transaction}>
        <span className={styles.success_label}>Transaction ID</span>
        <p className={styles.success_pill}>
          <span>0x1234***2325</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(95 159 50)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>

      <button className={styles.button_done}>Done</button>
    </div>
  )
}