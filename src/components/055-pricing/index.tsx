import styles from "./pricing.module.css";

export const PricingPlan = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pricing}>
        <div className={styles.pricing_plan_details}>
          <div className={styles.pricing_header}>
            <span className={styles.plan_name}>Starter</span>
            <span className={styles.plan_occurence}>Billed monthly</span>
          </div>
          <div className={styles.pricing_content}>
            <span className={styles.plan_price}>$10</span>
            <div className={styles.plan_target}>
              <span>Per Month</span>
              <span>Optimized for local businesses</span>
            </div>
          </div>
          <div className={styles.pricing_footer}>
            <button className={styles.btn_action}>Get started</button>
          </div>
        </div>

        <ul className={styles.pricing_features}>
          <li>
            <span className={styles.icon} />
            <span className={styles.text}>Access to single feature</span>
          </li>
          <li>
            <span className={styles.icon} />
            <span className={styles.text}>1 user support</span>
          </li>
          <li>
            <span className={styles.icon} />
            <span className={styles.text}>1 GB data</span>
          </li>
          <li>
            <span className={styles.icon} />
            <span className={styles.text}>Basic chat and support</span>
          </li>
        </ul>
      </div>

      <div className={styles.pricing}>
        <span className={styles.price_recommendation}>Recommended for you</span>
        <div className={styles.pricing_plan_details}>
          <div className={styles.pricing_header}>
            <span className={styles.plan_name}>Growth</span>
            <span className={styles.plan_occurence}>Billed monthly</span>
            <span className={styles.plan_offer}>15% Off</span>
          </div>
          <div className={styles.pricing_content}>
            <span className={styles.plan_price}>$20</span>
            <div className={styles.plan_target}>
              <span>Per Month</span>
              <span>Optimized for growing team</span>
            </div>
          </div>
          <div className={styles.pricing_footer}>
            <button className={styles.btn_action}>Get started</button>
          </div>
        </div>

        <ul className={styles.pricing_features}>
          <li>
            <span className={styles.icon} />
            <span className={styles.text}>Access to all features</span>
          </li>
          <li>
            <span className={styles.icon} />
            <span className={styles.text}>Upto 10 users support</span>
          </li>
          <li>
            <span className={styles.icon} />
            <span className={styles.text}>10 GB data</span>
          </li>
          <li>
            <span className={styles.icon} />
            <span className={styles.text}>Premium chat and support</span>
          </li>
        </ul>
      </div>

      <div className={styles.pricing}>
        <div className={styles.pricing_plan_details}>
          <div className={styles.pricing_header}>
            <span className={styles.plan_name}>Enterprise</span>
            <span className={styles.plan_occurence}>Billed monthly</span>
          </div>
          <div className={styles.pricing_content}>
            <span className={styles.plan_price}>$69</span>
            <div className={styles.plan_target}>
              <span>Per Month</span>
              <span>Optimized for Entreprenneurs, Agencies</span>
            </div>
          </div>
          <div className={styles.pricing_footer}>
            <button className={styles.btn_action}>Get started</button>
          </div>
        </div>

        <ul className={styles.pricing_features}>
          <li>
            <span className={styles.icon} />
            <span className={styles.text}>Access to all features</span>
          </li>
          <li>
            <span className={styles.icon} />
            <span className={styles.text}>Upto 20 users support</span>
          </li>
          <li>
            <span className={styles.icon} />
            <span className={styles.text}>20 GB data</span>
          </li>
          <li>
            <span className={styles.icon} />
            <span className={styles.text}>Premium chat and support</span>
          </li>
          <li>
            <span className={styles.icon} />
            <span className={styles.text}>Collaboration tools for teams</span>
          </li>
          <li>
            <span className={styles.icon} />
            <span className={styles.text}>Priority customer service</span>
          </li>
        </ul>
      </div>
    </div>
  )
}