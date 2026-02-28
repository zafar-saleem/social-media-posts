"use client";

import React from "react";
import styles from "./styles.module.css";

export const MultiStatePayButton = () => {
  const [status, setStatus] = React.useState("initial");

  React.useEffect(() => {
    if (status === "initial") return;
    setTimeout(() => {
      setStatus("done");
    }, 5000);
  }, [status]);

  return (
    <button
      className={`${styles.button} ${styles[status]}`}
      onClick={() => setStatus("pending")}
    >
      <div className={styles.labels}>
        <span
          className={
            `${styles.label} ${styles.initial} ${status === "initial" ? styles.show : styles.hide}`
          }
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(150 150 150)" stroke="rgb(98, 98, 98)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-wallet-icon lucide-wallet`}><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>
          <span>Pay</span>
        </span>
        <span className={`${styles.label} ${styles.pending} ${status === "pending" ? styles.show : styles.hide}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(166 180 232)" stroke="rgb(109, 133, 222)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-wallet-icon lucide-wallet`}><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>
          <span>Processing</span>
        </span>
        <span className={`${styles.label} ${styles.done} ${status === "done" ? styles.show : styles.hide}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(162 231 181)" stroke="rgb(97, 215, 130)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-wallet-icon lucide-wallet`}><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>
          <span>Success</span>
        </span>
      </div>
    </button>
  )
}
