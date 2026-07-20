"use client";

import React from "react";
import styles from "./styles.module.css";

export const Notifications = () => {
  const [counter] = React.useState(3);

  return (
    <button className={styles.button_notifications}>
      <div className={styles.button_icon}>
        <svg 
          width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="rgb(34 34 34)" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round"
          className={`lucide lucide-bell-ring-icon lucide-bell-ring ${counter > 0 && styles.ring}`}
        >
          <path d="M10.268 19a2 2 0 0 0 3.464 0"/>
          <path d="M22 8c0-2.3-.8-4.3-2-6"/>
          <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>
          <path d="M4 2C2.8 3.7 2 5.7 2 8"/>
        </svg>
      </div>
      <span className={`${styles.button_counter}`}>{counter}</span>
    </button>
  )
}