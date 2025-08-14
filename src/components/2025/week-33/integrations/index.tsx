"use client";

import Image from "next/image";
import styles from "./intergrations.module.css";
import React from "react";

// TOGGLE: 

export const Intergrations = () => {
  const [status, setStatus] = React.useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.integrations}>
        <div className={styles.header}>
          <span className={styles.logo_container}>
            <Image
              src="data:image/png;base64,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"
              width={36}
              height={36}
              alt=""
            />
          </span>
          <span className={styles.title}>Shopify</span>
          <span className={styles.column_separator} />
          <span className={`${!status && styles.reveal} ${styles.disconnected} ${styles.badge}`}>Disconnected</span>
          <span className={`${status && styles.reveal} ${styles.connected} ${styles.badge}`}>Connected</span>
          <label className={styles.toggle_platform}>
            <input type="checkbox" className={styles.toggle} onChange={() => !status ? setStatus(true) : setStatus(false)} />
          </label>
        </div>
        <div className={styles.separator} />
        <p className={styles.desc}>
          Connect your Shopify store to automatically track referrals
        </p>
      </div>
      <div className={styles.controls}>
        <button className={`${styles.btn} ${styles.btn_configure}`}>
          <span className={styles.btn_icon}>
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(123 123 123)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings-icon lucide-settings">
                <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
          </span>
          <span className={styles.btn_label}>Configure</span>
        </button>
        
        <button className={`${styles.btn} ${styles.btn_docs}`}>
          <span className={styles.btn_icon}>
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(123 123 123)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link-icon lucide-external-link">
              <path d="M15 3h6v6"/>
              <path d="M10 14 21 3"/>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            </svg>
          </span>
          <span className={styles.btn_label}>View docs</span>
        </button>
      </div>
    </div>
  )
}