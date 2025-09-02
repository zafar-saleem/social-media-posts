import Link from "next/link";
import styles from "./plan.module.css";
import React from "react";

export const Plan = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className={styles.container}>
      <ul className={`${styles.plan_container} ${checked ? styles.slide_down : styles.slide_up}`}>
        <li className={`${styles.plan_item} ${styles.flex}`}>
            <input
              type="radio"
              name="plan"
              className={`${styles.plan_field} ${styles.plan_field_monthly}`}
              onChange={() => setChecked(true)}
            />
          <label className={`${styles.plan_item_label} ${styles.flex} ${styles.flex_column}`}>
            <span className={styles.plan_item_label_text}>Monthly</span>
            <span className={styles.plan_item_trial}>3-day free trial</span>
          </label>
          <div className={`${styles.flex} ${styles.flex_column} ${styles.align_end} ${styles.flex_basis}`}>
            <span className={styles.plan_item_price}>$59/mo</span>
            <span className={styles.plan_item_occurence}>billed monthly</span>
          </div>
        </li>
        <li className={`${styles.plan_item} ${styles.flex}`}>
          <input type="radio" name="plan" className={styles.plan_field} onChange={() => setChecked(false)} />
          <label className={`${styles.plan_item_label} ${styles.flex} ${styles.flex_column}`}>
            <span className={styles.plan_item_label_text}>Yearly</span>
            <span className={styles.plan_item_trial}>14-day free trial</span>
          </label>
          <div className={`${styles.flex} ${styles.flex_column} ${styles.align_end} ${styles.flex_basis}`}>
            <span className={styles.plan_item_price}>$220/mo</span>
            <span className={styles.plan_item_occurence}>billed yearly</span>
          </div>
        </li>
        <p className={`${styles.plan_offer} ${checked ? styles.plan_offer_reveal : styles.plan_offer_hide}`}>Save 40% on yearly Plan</p>
      </ul>
      <Link href="#" className={styles.btn_action}>Subscribe</Link>
    </div>
  )
}