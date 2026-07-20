import styles from "./payments.module.css";

export const Payments = () => {
  return (
    <form className={styles.payments_form}>
      <div className={styles.form_actions}>
        <button className={`${styles.button_back} ${styles.button}`}>
          <span className={styles.icon}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgb(142 142 142)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-left-icon lucide-move-left"><path d="M6 8L2 12L6 16"/><path d="M2 12H22"/></svg>
          </span>
          <span className={styles.button_label}>Back</span>
        </button>
      </div>

      <span className={styles.form_title}>How to do you want to accept payments?</span>
      <p className={styles.form_desc}>You can add other features later if you need them.</p>

      <label className={styles.input_block}>
        <span className={styles.input_container}>
          <input type='checkbox' name="" className={styles.form_element} />
        </span>
        <div className={styles.input_text}>
          <span className={styles.input_label}>Checkout links</span>
          <p className={styles.input_desc}>Use payment links to share a payment page with you customers over email, SMS or social media.</p>
          <span className={`${styles.success} ${styles.input_badge}`}>No code required</span>
        </div>
      </label>


      <label className={styles.input_block}>
        <span className={styles.input_container}>
          <input type='checkbox' name="" className={styles.form_element} />
        </span>
        <div className={styles.input_text}>
          <span className={styles.input_label}>Prebuilt storage</span>
          <p className={styles.input_desc}>Use our prebuilt store page builder to build a simple landing page you can send your audience to.</p>
          <span className={`${styles.success} ${styles.input_badge}`}>No code required</span>
        </div>
      </label>


      <label className={styles.input_block}>
        <span className={styles.input_container}>
          <input type='checkbox' name="" className={styles.form_element} />
        </span>
        <div className={styles.input_text}>
          <span className={styles.input_label}>Embedded checkout</span>
          <p className={styles.input_desc}>Use elements to build secure payments experiences that perfectly match your business.</p>
          <span className={`${styles.disable} ${styles.input_badge}`}>Code required</span>
        </div>
      </label>

      <div className={styles.proceed_actions}>
        <button className={`${styles.skip_back} ${styles.button} button_one`}>
          <span className={styles.button_label}>Skip</span> <span>for</span> <span>now</span>
          <span className={styles.icon}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgb(142 142 142)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
          </span>
        </button>
        <button className={`${styles.button_save} button_two`}>
          <div>
            <span>Save</span>
          </div>
          <div>
            <span>Save</span>
          </div>
        </button>
      </div>
    </form>
  )
}