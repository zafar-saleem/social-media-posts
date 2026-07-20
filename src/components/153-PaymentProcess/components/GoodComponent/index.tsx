import styles from "../../PaymentProcess.module.css";

export const GoodComponent = () => {
  return (
    <div className={styles.item}>
      <span className={styles.icon}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(157 177 190)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-basket-icon lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>
      </span>
      <span className={styles.order_name}>Joyful Goods</span>
      <span className={styles.order_number}>Order JG-38291</span>
      <span className={styles.order_price}>104.99 USD</span>
    </div>
  )
}
