"use client";

import React from "react";
import styles from "./billing.module.css";

export const Billing = () => {
  const [active, setActive] = React.useState("general");

  return (
    <div className={styles.billing}>
      <span className={styles.billing_title}>Billing settings</span>
      <ul className={styles.tabs}>
        <li className={styles.tab_item}>
          <button
            className={`${active === "general" && styles.active} ${styles.tab_button}`}
            onClick={() => setActive("general")}
          >
            General
          </button>
        </li>
        <li className={styles.tab_item}>
          <button
            className={`${active === "payment" && styles.active} ${styles.tab_button}`}
            onClick={() => setActive("payment")}
          >
              Payment
          </button>
        </li>
        <li className={styles.tab_item}>
          <button
            className={`${active === "invoices" && styles.active} ${styles.tab_button}`}
            onClick={() => setActive("invoices")}
          >
            Invoices
          </button>
        </li>
        <li className={styles.tab_item}>
          <button
            className={`${active === "limits" && styles.active} ${styles.tab_button}`}
            onClick={() => setActive("limits")}
          >
            Limits
          </button>
        </li>
      </ul>
      <div className={`${active === "general" && styles.reveal} ${styles.contents}`}>
        <div>
          <div className={styles.content_item}>
            <span className={styles.content_label}>Email notifications</span>
            <p className={styles.info}>Receive billing updates via email</p>
          </div>
          <div className={styles.content_action}>
            <input type="checkbox" />
          </div>
        </div>
        <div>
          <div className={styles.content_item}>
            <span className={styles.content_label}>Usage alerts</span>
            <p className={styles.info}>Get notified when approaching limits</p>
          </div>
          <div className={styles.content_action}>
            <input type="checkbox" />
          </div>
        </div>
        <div>
          <div className={styles.content_item}>
            <span className={styles.content_label}>Invoice reminders</span>
            <p className={styles.info}>Remind me before auto-renewal</p>
          </div>
          <div className={styles.content_action}>
            <input type="checkbox" />
          </div>
        </div>
      </div>








      <div className={`${active === "payment" && styles.reveal} ${styles.payment} ${styles.contents}`}>
        <div className={styles.content_item}>
          <div>
            <p className={styles.card_number}>**** **** **** 2323</p>
            <p>
              <span className={styles.card_type}>Visa</span> <span>.</span> <span className={styles.expire_date}>Expires 12/25</span>
            </p>
          </div>
          <div>
            <button className={`button_four ${styles.button}`}>
              <span>Primary</span>
              <span>Primary</span>
              <span>Primary</span>
            </button>
          </div>
        </div>
        <div className={styles.content_action}>
          <button className={`button_four ${styles.button}`}>
            <span>Add new card</span>
            <span>Add new card</span>
            <span>Add new card</span>
          </button>
        </div>
      </div>








      <div className={`${active === "invoices" && styles.reveal} ${styles.contents}`}>
        <div>
          <div className={styles.content_item}>
            <span className={styles.content_label}>Invoice format</span>
            <p className={styles.info}>Choose PDF or HTML format</p>
          </div>
          <div className={styles.content_action}>
            <select>
              <option>PDF</option>
              <option>HTML</option>
            </select>
          </div>
        </div>
        <div>
          <div className={styles.content_item}>
            <span className={styles.content_label}>Billing address</span>
            <p className={styles.info}>Update your billing address</p>
          </div>
          <div className={styles.content_action}>
            <button className={`button_four ${styles.button_edit}`}>
              <span>Edit</span>
              <span>Edit</span>
              <span>Edit</span>
            </button>
          </div>
        </div>
      </div>





      <div className={`${active === "limits" && styles.reveal} ${styles.contents}`}>
        <div>
          <div className={styles.content_item}>
            <span className={styles.content_label}>Overage protection</span>
            <p className={styles.info}>Prevent accidental overages</p>
          </div>
          <div className={styles.content_action}>
            <input type="checkbox" />
          </div>
        </div>
        <div>
          <div className={styles.content_item}>
            <span className={styles.content_label}>Usage limit alerts</span>
            <p className={styles.info}>Alert at 80% and 95% usage</p>
          </div>
          <div className={styles.content_action}>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  )
}