import { GoodComponent } from "../../../components/GoodComponent";
import styles from "../../../PaymentProcess.module.css";
import { ComponentTitleProp } from "../../../types";

export const ConfirmationView = ({ title }: ComponentTitleProp) => {
  return (
    <section className={`${title === "confirmation" && styles.reveal} ${styles.confirmation_view}`}>
      

      <GoodComponent />



      <div className={styles.total}>
        <span className={styles.icon}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(0 193 130)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        </span>
        <span className={styles.label}>Total paid</span>
        <span className={styles.amount}>104,09 USD</span>
      </div>
      <div className={styles.controls}>
        <button className={`${styles.button} ${styles.button_pay}`}>
          <span className={styles.icon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(240 240 240)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tractor-icon lucide-tractor"><path d="m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20"/><path d="M16 18h-5"/><path d="M18 5a1 1 0 0 0-1 1v5.573"/><path d="M3 4h8.129a1 1 0 0 1 .99.863L13 11.246"/><path d="M4 11V4"/><path d="M7 15h.01"/><path d="M8 10.1V4"/><circle cx="18" cy="18" r="2"/><circle cx="7" cy="15" r="5"/></svg>
          </span>
          <span>Track package</span>
        </button>
        <button className={`${styles.button} ${styles.button_download}`}>
          <span className={styles.icon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(168 168 170)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-printer-icon lucide-printer"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>
          </span>
          <span>Download receipt</span>
        </button>
      </div>
    </section>
  )
}
