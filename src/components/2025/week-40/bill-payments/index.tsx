import styles from "./bills.module.css";

export const BillsPayments = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <span className={styles.title}>Bills & Payments</span>
          <span className={styles.timestamp}>March 2024</span>
        </div>
        <button className={`button_one`}>
          <span>View All</span>
        </button>
      </header>
      <main className={styles.contents}>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <div>
            <span className={styles.calender}>
              <span className={styles.month_name}>APR</span>
              <span className={styles.month_day}>16</span>
            </span>


            <div className={styles.bill_details}>
              <span className={styles.text}>Setapp Subscription</span>
              <div className={styles.payments}>
                <span className={styles.badge}>Wise</span>
                <span className={styles.timestamp}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgb(146 146 146)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-alert-icon lucide-clock-alert"><path d="M12 6v6l4 2"/><path d="M20 12v5"/><path d="M20 21h.01"/><path d="M21.25 8.2A10 10 0 1 0 16 21.16"/></svg>
                  <span className={styles.text}>Apr 16, 2025</span>
                </span>
              </div>
            </div>


            <div className={styles.recurring}>
              <div>
                <span className={styles.label}>Monthly</span>
                <span className={styles.amount}>$19.99</span>
              </div>
              <button>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(143 143 143)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
              </button>
            </div>
            </div>
            <div className={styles.additional_actions}>
              <span>Next payment day in 2 days</span>
              <span className={styles.actions}>
                <button className={`button_one`}>
                  <span>Remind</span> <span>me</span> <span>later</span>
                </button>
                <button className={`button_one`}>
                  <span>Set</span> <span>reminder</span>
                </button>
              </span>
            </div>
          </li>




          <li className={styles.list_item}>
            <div>
            <span className={`${styles.method_stripe} ${styles.calender}`}>
              <span className={styles.month_name}>APR</span>
              <span className={styles.month_day}>24</span>
            </span>


            <div className={styles.bill_details}>
              <span className={styles.text}>Layers Subscription</span>
              <div className={styles.payments}>
                <span className={styles.badge}>Stripe</span>
                <span className={styles.timestamp}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgb(146 146 146)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-alert-icon lucide-clock-alert"><path d="M12 6v6l4 2"/><path d="M20 12v5"/><path d="M20 21h.01"/><path d="M21.25 8.2A10 10 0 1 0 16 21.16"/></svg>
                  <span className={styles.text}>Apr 24, 2025</span>
                </span>
              </div>
            </div>


            <div className={styles.recurring}>
              <div>
                <span className={styles.label}>Monthly</span>
                <span className={styles.amount}>$9.99</span>
              </div>
              <button>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(143 143 143)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
              </button>
            </div>
            </div>
          </li>
          <li className={styles.list_item}>
            <div>
            <span className={styles.calender}>
              <span className={styles.month_name}>APR</span>
              <span className={styles.month_day}>26</span>
            </span>


            <div className={styles.bill_details}>
              <span className={styles.text}>Mobin Subscription</span>
              <div className={styles.payments}>
                <span className={styles.badge}>Wise</span>
                <span className={styles.timestamp}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgb(146 146 146)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-alert-icon lucide-clock-alert"><path d="M12 6v6l4 2"/><path d="M20 12v5"/><path d="M20 21h.01"/><path d="M21.25 8.2A10 10 0 1 0 16 21.16"/></svg>
                  <span className={styles.text}>Apr 26, 2025</span>
                </span>
              </div>
            </div>


            <div className={styles.recurring}>
              <div>
                <span className={styles.label}>Monthly</span>
                <span className={styles.amount}>$96.99</span>
              </div>
              <button>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(143 143 143)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
              </button>
            </div>
            </div>
          </li>
        </ul>
      </main>
    </div>
  )
}