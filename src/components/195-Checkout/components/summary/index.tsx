import { calculateSubtotal, totalCost } from "../../../Cart";
import { useProductCategory } from "../../../ProductCategoryFilter/store";
import styles from "./styles.module.css";

export const Summary = () => {
  const cart = useProductCategory((state) => state.cart);
  
  return (
    <div className={styles.checkout_summary}>
      <div>
        <h4>Summary</h4>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(40 40 40)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet-cards-icon lucide-wallet-cards"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"/><path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"/></svg>
      </div>
      <div className={`${styles.box} ${styles.subtotal}`}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(40 40 40)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-closed-caption-icon lucide-closed-caption"><path d="M10 9.17a3 3 0 1 0 0 5.66"/><path d="M17 9.17a3 3 0 1 0 0 5.66"/><rect x="2" y="5" width="20" height="14" rx="2"/></svg>
        <span className={styles.label}>Subtotal</span>
        <span className={styles.value}>${calculateSubtotal(cart)}</span>
      </div>
      <div className={`${styles.box} ${styles.shipping_fee}`}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(40 40 40)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck-icon lucide-truck"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
        <span className={styles.label}>Shipping Fee</span>
        <span className={styles.value}>$9.99</span>
      </div>
      <div className={`${styles.box} ${styles.shipping_fee} ${styles.total}`}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(40 40 40)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calculator-icon lucide-calculator"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
        <span className={styles.label}>Total</span>
        <span className={styles.value}>${totalCost(cart)}</span>
      </div>
    </div>
  )
}
