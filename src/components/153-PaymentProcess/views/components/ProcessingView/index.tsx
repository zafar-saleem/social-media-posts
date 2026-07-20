import styles from "../../../PaymentProcess.module.css";
import { ComponentTitleProp } from "../../../types";

const DELAY = 5000;

export const ProcessingView = ({ title }: ComponentTitleProp) => {
  return (
    <section className={`${title === "processing" && styles.reveal} ${styles.card} ${styles.processing_view}`}>
      <div className={styles.item}>
        <span className={styles.icon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(173 174 178)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-loader-circle-icon lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
        </span>
        <span className={styles.ordering_status}>Authorizing payment...</span>
        <span className={styles.ordering_info}>This can take a few seconds</span>
      </div>



      <div
        className={`${styles.progress_bar}`}
        style={{
          "--w": title === "processing" && "100%",
          "--d": `${DELAY}ms`,
        }}
      />




      <section className={styles.bank_connection}>
        <span>Bank</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(230 230 230)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-landmark-icon lucide-landmark"><path d="M10 18v-7"/><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M3 22h18"/><path d="M6 18v-7"/></svg>
      </section>
      <section className={styles.security}>
        <span>3-D</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(230 230 230)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check-icon lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
      </section>
      <section className={styles.network}>
        <span>Network</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(230 230 230)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-earth-lock-icon lucide-earth-lock"><path d="M7 3.34V5a3 3 0 0 0 3 3"/><path d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M12 2a10 10 0 1 0 9.54 13"/><path d="M20 6V4a2 2 0 1 0-4 0v2"/><rect width="8" height="5" x="14" y="6" rx="1"/></svg>
      </section>
    </section>
  )
}
