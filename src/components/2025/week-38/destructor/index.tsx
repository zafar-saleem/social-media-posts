"use client";

import React from "react";
import styles from "./destructor.module.css";

export const Destructor = () => {
  let [inDays, setInDays] = React.useState(7);

  return (
    <ul className={styles.container}>
      <li className={styles.item}>
        <span className={styles.item_label}>Misc</span>
        <p className={styles.description}>Misc Settings</p>
      </li>
      <li className={`${styles.destructor} ${styles.item}`}>
        <div>
          <section>
            <span className={styles.item_label}>Auto-close conversation</span>
            <p className={styles.description}>Automatically close conversations after a period of inactivity</p>
          </section>
          <label>
            <input type="checkbox" />
          </label>
        </div>
        <div>
          <button onClick={() => setInDays((prev) => inDays--)}>-</button>
          <input type="text" defaultValue={`${inDays} days`} />
          <button onClick={() => setInDays((prev) => inDays++)}>+</button>
        </div>
        <section>
          <span className={styles.separator} />
          <span className={styles.item_label}>Export Project Data</span>
          <p className={styles.description}>Your data belong to you. You can export all converstation and messages as a JSON file.</p>
          <button>
            <span className={styles.icon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(72 80 92)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-panel-left-open-icon lucide-panel-left-open"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="m14 9 3 3-3 3"/></svg>
            </span>
            <span className={styles.button_label}>Export Project Data</span>
          </button>
        </section>
      </li>
    </ul>
  )
}