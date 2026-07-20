import styles from "../../styles.module.css";

export const ShippingAddress = () => {
  return (
    <section>
      <div className={styles.title_container}>
        <h4>Shipping Address</h4>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(40 40 40)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck-electric-icon lucide-truck-electric"><path d="M14 19V7a2 2 0 0 0-2-2H9"/><path d="M15 19H9"/><path d="M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14"/><path d="M2 13v5a1 1 0 0 0 1 1h2"/><path d="M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02"/><circle cx="17" cy="19" r="2"/><circle cx="7" cy="19" r="2"/></svg>
      </div>
      <div className={styles.fieldset}>
        <label className={styles.form_field}>
          <div>
            <span className={styles.field_label}>Address</span>
          </div>
          <input type="text" name="address" className={styles.card_name} />
        </label>
        <div>
          <label className={styles.form_field}>
            <div>
              <span className={styles.field_label}>City</span>
            </div>
            <input type="text" name="city" className={styles.card_number} />
          </label>
          <label className={styles.form_field}>
            <div>
              {/* <span className={styles.field_label}>Country</span> */}
            </div>
            <select className={styles.country}>
              <option>Country</option>
              <option>Portugal</option>
              <option>United Kingdom</option>
              <option>USA</option>
            </select>
          </label>
        </div>
        <div>
          <label className={styles.form_field}>
            <div>
            <span className={styles.field_label}>State or Province</span>
            </div>
            <input type="text" name="card" className={styles.date} />
          </label>
          <label className={styles.form_field}>
            <div>
              <span className={styles.field_label}>Postal Code</span>
            </div>
            <input type="number" name="card" className={styles.date} />
          </label>
        </div>
      </div>
    </section>
  )
}
