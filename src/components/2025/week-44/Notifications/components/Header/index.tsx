import { ComponentProps } from "../../types";
import styles from "../../Notifications.module.css";
import React from "react";

export const Header = React.memo(({ setFilter, data }: ComponentProps) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Notifications</h1>
      {
        data.length > 0 && <button className={styles.button_close} onClick={() => setFilter([])}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(168 167 175)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-check-icon lucide-check-check"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>
          <span className={styles.button_label}>Clear All</span>
        </button>
      }
    </header>
  )
})
