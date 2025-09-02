import styles from "./pricing.module.css";

export const PricingComponent = () => {
  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <span>Professional</span>
        <div className={styles.price}>
          <span className={styles.amount}>$49</span><span className={styles.occurence}>/month</span>
        </div>
      </header>
      <div className={styles.divider} />
      <main className={styles.contents}>
        <ul className={styles.feature_list}>
          <li>
            <span className={styles.icon_check} />
            <span className={styles.feature_text}>Enhanced SEO Insights</span>
          </li>
          <li>
            <span className={styles.icon_check} />
            <span className={styles.feature_text}>Advanced Campaign Tools</span>
          </li>
          <li>
            <span className={styles.icon_check} />
            <span className={styles.feature_text}>Unlimited Keyword Research</span>
          </li>
          <li>
            <span className={styles.icon_check} />
            <span className={styles.feature_text}>AI-Driven Analytics</span>
          </li>
          <li>
            <span className={styles.icon_check} />
            <span className={styles.feature_text}>Priority Customer Support</span>
          </li>
        </ul>
      </main>
      <div className={styles.divider} />
      <footer className={styles.footer}>
        <button className={`${styles.button} ${styles.btn}`}>
          <span>Start</span> <span>Now</span>
        </button>
      </footer>
    </div>
  )
}