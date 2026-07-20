import styles from "../../../../PaymentProcess.module.css";
import { ComponentTitleProp } from "../../../../types";

export const ReviewHeader = ({ title }: ComponentTitleProp) => {
  return (
    <div
      className={`
        ${title === "review" && styles.reveal}
        ${styles.header_review_view}
      `}
    >
      <span className={`${styles.icon} ${styles.icon_shadow} ${styles.icon_radius}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(173 174 178)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card-icon lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
      </span>
      <span className={styles.header_title}>Review & Pay</span>
      <span className={styles.header_price}>104.99 USD</span>
    </div>
  )
}
