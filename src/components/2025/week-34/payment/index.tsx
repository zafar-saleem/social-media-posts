import styles from "./payment.module.css";

export const AddPaymentMethod = () => {
  return (
    <div className={styles.payment_method}>
      <nav className={styles.tab_container}>
        <ul className={styles.tabs}>
          <li className={styles.tab_item}>
            <label htmlFor="card">
              <span className={styles.tab_icon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(162 168 181)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-credit-card-icon lucide-credit-card">
                  <rect width="20" height="14" x="2" y="5" rx="2"/>
                  <line x1="2" x2="22" y1="10" y2="10"/>
                </svg>
              </span>
              <span>Card</span>
            </label>
            <input type="radio" name="payment" id="card" defaultChecked />
            <form className={styles.contents}>
              <label>
                <span>Name</span>
                <input type="text" />
              </label>
              <section className={styles.card_details}>
                <label>
                  <span>Card number</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(162 168 181)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-credit-card-icon lucide-credit-card ${styles.card_icon}`}>
                    <rect width="20" height="14" x="2" y="5" rx="2"/>
                    <line x1="2" x2="22" y1="10" y2="10"/>
                  </svg>
                  <input type="text" />
                  <svg width="24" height="24" viewBox="0 -11 70 70" fill="none" className={styles.card_logo}>
                    <rect x="0.5" y="0.5" width="69" height="47" rx="5.5" fill="white" stroke="#D9D9D9"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M35.3945 34.7619C33.0114 36.8184 29.92 38.0599 26.5421 38.0599C19.0047 38.0599 12.8945 31.8788 12.8945 24.254C12.8945 16.6291 19.0047 10.448 26.5421 10.448C29.92 10.448 33.0114 11.6895 35.3945 13.7461C37.7777 11.6895 40.869 10.448 44.247 10.448C51.7843 10.448 57.8945 16.6291 57.8945 24.254C57.8945 31.8788 51.7843 38.0599 44.247 38.0599C40.869 38.0599 37.7777 36.8184 35.3945 34.7619Z" fill="#ED0006"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M35.3945 34.7619C38.3289 32.2296 40.1896 28.4616 40.1896 24.254C40.1896 20.0463 38.3289 16.2783 35.3945 13.7461C37.7777 11.6895 40.869 10.448 44.247 10.448C51.7843 10.448 57.8945 16.6291 57.8945 24.254C57.8945 31.8788 51.7843 38.0599 44.247 38.0599C40.869 38.0599 37.7777 36.8184 35.3945 34.7619Z" fill="#F9A000"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M35.3946 13.7461C38.329 16.2784 40.1897 20.0463 40.1897 24.254C40.1897 28.4616 38.329 32.2295 35.3946 34.7618C32.4603 32.2295 30.5996 28.4616 30.5996 24.254C30.5996 20.0463 32.4603 16.2784 35.3946 13.7461Z" fill="#FF5E00"/>
                  </svg>
                </label>
                <label>
                  <span>Expiry date</span>
                  <input type="month" />
                </label>
                <label>
                  <span>CVV</span>
                  <input type="password" />
                </label>
              </section>
              <label className={styles.default_card}>
                <input type="checkbox" />
                <span>Make default payment method</span>
              </label>
              <button className={styles.button}>Add payment method</button>
            </form>
          </li>
          <li className={styles.tab_item}>
            <label htmlFor="paypal">
              <span className={styles.tab_icon}>
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" stroke="rgb(162 168 181)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18.7,13.767l0.005,0.002C18.809,13.326,19.187,13,19.66,13h13.472c0.017,0,0.034-0.007,0.051-0.006C32.896,8.215,28.887,6,25.35,6H11.878c-0.474,0-0.852,0.335-0.955,0.777l-0.005-0.002L5.029,33.813l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,0.991,1,0.991h8.071L18.7,13.767z"/>
                  <path d="M33.183,12.994c0.053,0.876-0.005,1.829-0.229,2.882c-1.281,5.995-5.912,9.115-11.635,9.115c0,0-3.47,0-4.313,0c-0.521,0-0.767,0.306-0.88,0.54l-1.74,8.049l-0.305,1.429h-0.006l-1.263,5.796l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,1,1,1h7.333l0.013-0.01c0.472-0.007,0.847-0.344,0.945-0.788l0.018-0.015l1.812-8.416c0,0,0.126-0.803,0.97-0.803s4.178,0,4.178,0c5.723,0,10.401-3.106,11.683-9.102C42.18,16.106,37.358,13.019,33.183,12.994z"/>
                  <path d="M19.66,13c-0.474,0-0.852,0.326-0.955,0.769L18.7,13.767l-2.575,11.765c0.113-0.234,0.359-0.54,0.88-0.54c0.844,0,4.235,0,4.235,0c5.723,0,10.432-3.12,11.713-9.115c0.225-1.053,0.282-2.006,0.229-2.882C33.166,12.993,33.148,13,33.132,13H19.66z"/>
                </svg>
              </span>
              <span>Paypal</span>
            </label>
            <input type="radio" name="payment" id="paypal" />
            <div className={`${styles.contents} ${styles.center}`}>
              <svg viewBox="0 0 48 48" width="96px" height="96px"><path fill="#1565C0" d="M18.7,13.767l0.005,0.002C18.809,13.326,19.187,13,19.66,13h13.472c0.017,0,0.034-0.007,0.051-0.006C32.896,8.215,28.887,6,25.35,6H11.878c-0.474,0-0.852,0.335-0.955,0.777l-0.005-0.002L5.029,33.813l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,0.991,1,0.991h8.071L18.7,13.767z"/><path fill="#039BE5" d="M33.183,12.994c0.053,0.876-0.005,1.829-0.229,2.882c-1.281,5.995-5.912,9.115-11.635,9.115c0,0-3.47,0-4.313,0c-0.521,0-0.767,0.306-0.88,0.54l-1.74,8.049l-0.305,1.429h-0.006l-1.263,5.796l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,1,1,1h7.333l0.013-0.01c0.472-0.007,0.847-0.344,0.945-0.788l0.018-0.015l1.812-8.416c0,0,0.126-0.803,0.97-0.803s4.178,0,4.178,0c5.723,0,10.401-3.106,11.683-9.102C42.18,16.106,37.358,13.019,33.183,12.994z"/><path fill="#283593" d="M19.66,13c-0.474,0-0.852,0.326-0.955,0.769L18.7,13.767l-2.575,11.765c0.113-0.234,0.359-0.54,0.88-0.54c0.844,0,4.235,0,4.235,0c5.723,0,10.432-3.12,11.713-9.115c0.225-1.053,0.282-2.006,0.229-2.882C33.166,12.993,33.148,13,33.132,13H19.66z"/></svg>
              <span className={styles.title}>Add PayPal</span>
              <p className={styles.desc}>Connect your PayPal account to our platform.</p>
              <button className={styles.button}>Connect PayPal</button>
            </div>
          </li>
          <li className={styles.tab_item}>
            <label htmlFor="gpay">
              <span className={styles.tab_icon}>
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" stroke="rgb(162 168 181)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M37.62,9.38L34.7,12.3c-1.47,1.47-3.7,1.75-5.58,0.85C27.57,12.41,25.84,12,24,12c-3.96,0-7.47,1.91-9.65,4.87l-6.44-4.73
                    C11.53,7.2,17.39,4,24,4C29.27,4,34.05,6.05,37.62,9.38z"/>
                  <path d="M35,40.7c-3.16,2.09-6.93,3.3-11,3.3c-6.7,0-12.62-3.29-16.23-8.34l6.33-4.88C16.26,33.93,19.88,36,24,36
                    c1.57,0,3.06-0.3,4.43-0.86L35,40.7z"/>
                  <path d="M12,24c0,1.43,0.25,2.79,0.71,4.06L6.2,33.08v0.03C4.79,30.38,4,27.28,4,24c0-3.36,0.83-6.53,2.31-9.31l6.56,4.81
                    C12.31,20.89,12,22.41,12,24z"/>
                  <path d="M44,24c0,5.88-2.55,11.18-6.59,14.83c0-0.01,0-0.01,0-0.02l-6.19-5.24c1.86-1.4,3.29-3.33,4.08-5.57H28
                    c-2.209,0-4-1.791-4-4v-4h19.61C43.86,21.27,44,22.66,44,24z"/>
                </svg>
              </span>
              <span>GPay</span>
            </label>
            <input type="radio" name="payment" id="gpay" />
            <div className={`${styles.contents} ${styles.center}`}>
              <svg viewBox="0 0 48 48" width="96px" height="96px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
              <span className={styles.title}>Add Google Pay</span>
              <p className={styles.desc}>Connect your Google Pay account to our platform.</p>
              <button className={styles.button}>Connect GPay</button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}