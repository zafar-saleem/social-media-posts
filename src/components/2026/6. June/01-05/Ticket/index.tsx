import Link from "next/link";
import styles from "./styles.module.css";

export const Ticket = () => {
  return (
    <div className={styles.ticket}>
      <article className={styles.ticket_article}>
        <h1 className={styles.article_title}>All-Inclusive Ticket</h1>
        <p className={styles.article_text}>Onsite ticket including food, drinks and access to recordings</p>
      </article>
      <article className={styles.ticket_article}>
        <h1 className={styles.article_price}>$699</h1> <span className={styles.article_vat}>+vat</span>

        <ul className={styles.ticket_offers}>
          <li className={styles.ticker_offer}>1 Seat</li>
          <li className={styles.ticker_offer}>Free Lunch & Snacks</li>
          <li className={styles.ticker_offer}>Middle Seat</li>
        </ul>
      </article>

      <Link href="#" className={styles.button}>
        <span className={styles.button_label}>Get Tickets</span>
        <div className={styles.button_icon}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(18 18 18)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
        </div>
      </Link>
    </div>
  )
}