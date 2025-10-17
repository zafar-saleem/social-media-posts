import styles from "./Toast.module.css";
import Image from "next/image";

export const Toasts = () => {
  return (
    <section className={styles.container}>
      <label className={`${styles.button} ${styles.button_save}`}>
        <span className={styles.label}>Save Toast</span>
        <input type="radio" name="button" />
      </label>
      <section className={`${styles.toast} ${styles.toast_save}`}>
        <span className={styles.icon}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
        </span>
        <p>Changes were successfully saved</p>
        <button>
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(209 211 214)"
            strokeWidth="2"
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={`lucide lucide-x-icon lucide-x ${styles.btn_close_icon}`}
          >
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
        </button>
      </section>
      <label className={`${styles.button} ${styles.button_delete}`}>
        <span className={styles.label}>Delete Toast</span>
        <input type="radio" name="button" />
      </label>
      <section className={`${styles.toast} ${styles.toast_delete}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(243 244 248)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2-icon lucide-trash-2">
          <path d="M10 11v6"/>
          <path d="M14 11v6"/>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>

          <path className={styles.trash} d="M8 -3v1"/>
          <path className={styles.trash} d="M9 -5v1"/>
          <path className={styles.trash} d="M12 -2v1"/>
          <path className={styles.trash} d="M14 -6v1"/>

          <path className={styles.icon_trash} d="M3 6h18"/>
          <path className={styles.icon_trash} d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
        </svg>
        <p>Card was successfully deleted</p>
        <button>
          <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(209 211 214)"
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`lucide lucide-x-icon lucide-x ${styles.btn_close_icon}`}
            >
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
        </button>
      </section>
      <label className={`${styles.button} ${styles.button_fail}`}>
        <span className={styles.label}>Unsuccessful Toast</span>
        <input type="radio" name="button" />
      </label>
      <section className={`${styles.toast} ${styles.toast_fail}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(254 40 55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert-icon lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
        <p>Something went wrong while editing. Please try again</p>
        <button>
          <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(209 211 214)"
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`lucide lucide-x-icon lucide-x ${styles.btn_close_icon}`}
            >
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
        </button>
      </section>
    </section>
  )
}