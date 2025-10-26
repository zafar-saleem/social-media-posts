import Image from "next/image";
import { GoodComponent } from "../../../components/GoodComponent";
import styles from "../../../PaymentProcess.module.css";
import { ComponentStateProp } from "../../../types";

export const PaymentDetailsView = ({ title, setTitle }: ComponentStateProp) => {
  return (
    <div className={`${title === "review" && styles.reveal} ${styles.view} ${styles.payment_details}`}>
      <div className={styles.items}>
        <GoodComponent />
      </div>



      <div className={`${styles.card} ${styles.card_details}`}>
        <span className={styles.card_name}>J. Appleseed</span>
        <span className={styles.card_number}>**** 4242</span>
        <span className={styles.icon}>
          <Image width="28" height="28" src="https://img.icons8.com/color-glass/48/visa.png" alt="visa"/>
        </span>
      </div>
      <button className={`${styles.card} ${styles.button_card}`}>
        <span>+</span>
        <span>Add new card</span>
      </button>

      <button className={styles.button_pay} onClick={() => setTitle("processing")}>
        <span className={styles.icon}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(240 240 240)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card-icon lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
        </span>
        <span>Pay now</span>
      </button>
    </div>
  )
}
