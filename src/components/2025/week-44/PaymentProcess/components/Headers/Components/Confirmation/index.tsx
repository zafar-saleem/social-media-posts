import styles from "../../../../PaymentProcess.module.css";
import { ComponentTitleProp } from "../../../../types";

export const ConfirmationHeader = ({ title }: ComponentTitleProp) => {
  return (
    <div className={`${title === "confirmation" && styles.reveal} ${styles.header_confirmation_view}`}>
      <span className={`${styles.icon} ${styles.icon_shadow} ${styles.icon_radius}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
      </span>
      <span className={styles.header_title}>Payment confirmed</span>
      <span className={styles.header_info}>You're all set - receipt saved below</span>
    </div>
  )
}
