import styles from "./styles.module.css";

export const FeedbackForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.form_box}>
        <h1 className={styles.form_title}>How's your order?</h1>
        <span className={styles.form_text}>Review and get rewards for any product.</span>
      </div>
      <div className={styles.form_rating}>
        <label>
          <input type="radio" name="rate" />☆
        </label>
        <label>
          <input type="radio" name="rate" />☆
        </label>
        <label>
          <input type="radio" name="rate" />☆
        </label>
        <label>
          <input type="radio" name="rate" />☆
        </label>
        <label>
          <input type="radio" name="rate" />☆
        </label>
      </div>
      <p className={styles.form_copy}>
        <span className={styles.copy_text}>Rewards Cashback</span>
        <span className={styles.copy_cash}>$10.00</span>
      </p>

      <div>
        <input type="text" className={styles.form_input} placeholder="Type to review..." />
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(201 203 209)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-icon lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
      </div>
      <button type="button">Submit</button>
    </form>
  )
}