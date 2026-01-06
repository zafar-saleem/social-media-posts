import Link from "next/link";
import styles from "../../styles.module.css";
import Image from "next/image";

export const CardDetails = () => {
  return (
    <section className={styles.payment_container}>
      <div>
        <div className={styles.title_payment}>
          <h4>Payment</h4>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(40 40 40)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card-icon lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
        </div>
      </div>
      <div className={styles.payment_tabs}>
        <label className={styles.tab_label}>
          <input type="radio" name="tab" className={`${styles.tab} ${styles.credit}`} defaultChecked={true} />
          <Image
            src="https://img.icons8.com/emoji/48/credit-card-emoji.png"
            alt=""
            width={25}
            height={25}
          />
          <span className={styles.tab_text}>Credit Card</span>
        </label>
        <label className={styles.tab_label}>
          <input type="radio" name="tab" className={`${styles.tab} ${styles.debit}`} />
          <Image
            src="https://img.icons8.com/color/48/visa.png"
            alt=""
            width={25}
            height={25}
          />
          <span className={styles.tab_text}>Visa Card</span>
        </label>
        <label className={styles.tab_label}>
          <input type="radio" name="tab" className={`${styles.tab} ${styles.paypal}`} />
          <Image
            src="https://img.icons8.com/color/48/paypal.png"
            alt=""
            width={25}
            height={25}
          />
          <span className={styles.tab_text}>Paypal</span>
        </label>
      </div>
      <div className={`${styles.fieldset} ${styles.credit}`}>
        <label className={styles.form_field}>
          <div>
            <span className={styles.field_label}>Name on credit card</span>
          </div>
          <input type="text" name="card" className={styles.card_name} />
        </label>
        <label className={styles.form_field}>
          <div>
          <span className={styles.field_label}>Credit Card number</span>
          </div>
          <input type="text" name="card" className={styles.card_number} />
        </label>
        <div>
          <label className={styles.form_field}>
            <div>
            <span className={`${styles.date} ${styles.field_label}`}>Expiry date</span>
            </div>
            <input type="date" name="card" className={styles.date} />
          </label>
          <label className={styles.form_field}>
            <div>
            <span className={styles.field_label}>CVV</span>
            </div>
            <input type="password" name="card" className={styles.date} />
          </label>
        </div>
      </div>
      
      
      
      <div className={`${styles.fieldset} ${styles.debit}`}>
        <label className={styles.form_field}>
          <div>
            <span className={styles.field_label}>Name on debit card</span>
          </div>
          <input type="text" name="card" className={styles.card_name} />
        </label>
        <label className={styles.form_field}>
          <div>
          <span className={styles.field_label}>Debit Card number</span>
          </div>
          <input type="text" name="card" className={styles.card_number} />
        </label>
        <div>
          <label className={styles.form_field}>
            <div>
            <span className={`${styles.date} ${styles.field_label}`}>Expiry date</span>
            </div>
            <input type="date" name="card" className={styles.date} />
          </label>
          <label className={styles.form_field}>
            <div>
            <span className={styles.field_label}>CVV</span>
            </div>
            <input type="password" name="card" className={styles.date} />
          </label>
        </div>
      </div>
      
      
      
      <div className={`${styles.fieldset} ${styles.paypal}`}>
        <Link href="#">
          <Image
            width={86}
            height={86}
            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-paypal-an-online-payments-system-operating-worldwide-logo-color-tal-revivo.png"
            alt=""
          />
        </Link>
      </div>
    </section>
  )
}
