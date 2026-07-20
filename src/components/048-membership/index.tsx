import React from "react";
import styles from "./membership.module.css";

export const Membership = () => {
  const [show, setShow] = React.useState(true);
  
  return (
    <div className={styles.membership_wrapper}>
      <div className={styles.membership}>
      <h1 className={styles.title}>Customize your annual membership</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, debitis.</p>
      <div className={styles.membership_container}>
        <label className={styles.membership_contents}>
          <div className={styles.membership_label}>
            <span className={styles.membership_label_text}>Baseline Membership</span>
            <span className={styles.membership_label_support}>100+ biomarkers</span>
          </div>
          <span className={styles.membership_price}>
            $499
          </span>
          <div className={styles.membership_field}>
            <input type="radio" name="membership" className={styles.membership_input} onChange={() => setShow(!show)} />
          </div>
        </label>
        <label className={styles.membership_contents}>
          <div className={styles.membership_label}>
            <span className={styles.membership_label_text}>
              Advanced Membership
              <span className={styles.membership_badge}>Most popular</span>
            </span>
            <span className={styles.membership_label_support}>120+ biomarkers</span>
          </div>
          <span className={styles.membership_price}>
            $699
          </span>
          <div className={styles.membership_field}>
            <input type="radio" name="membership" className={styles.membership_input} onChange={() => setShow(!show)} />
          </div>
        </label>
      </div>
      </div>
      <div className={`${styles.membership_visuals} ${show ? styles.silver : styles.orange}`}>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <div className={`${styles.card_orange} ${styles.card} ${!show ? styles.card_show : styles.card_hide}`}></div>
        <div className={`${styles.card_silver} ${styles.card} ${show ? styles.card_show : styles.card_hide}`}></div>
      </div>
    </div>
  )
}