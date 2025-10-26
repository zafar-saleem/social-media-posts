import styles from "../../../../PaymentProcess.module.css";
import { ComponentTitleProp } from "../../../../types";

export const ProcessingHeader = ({ title }: ComponentTitleProp) => {
  return (
    <div className={`${title === "processing" && styles.reveal} ${styles.header_processing_view}`}>
      <span className={`${styles.icon} ${styles.icon_shadow} ${styles.icon_radius}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(173 174 178)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-loader-circle-icon lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
      </span>
      <span className={styles.header_title}>Processing payment...</span>
      <span className={`${styles.header_info} ${styles.total_price}`}>
        {
          ['This', 'usually', 'takes', 'a', 'few', 'seconds'].map((word, index) => (
            <span
              key={index}
              style={{ "--d": index * 0.10 }}
            >{word} </span>
          ))
        }
      </span>
    </div>
  )
}
