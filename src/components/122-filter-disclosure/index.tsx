"use client";

import React from "react";
import styles from "./filter.module.css";

export const FilterDisclosure = () => {
  const [open, setOpen] = React.useState("open");

  return (
    <nav className={`${styles[open]} ${styles.container}`}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_list_item}>
          <button onClick={() => setOpen(() => open === "open" ? "close" : "open")}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="rgb(31 31 31)" stroke="rgb(31 31 31)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles-icon lucide-sparkles">
              <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/>
              <path d="M20 2v4"/>
              <path d="M22 4h-4"/>
              <circle cx="4" cy="20" r="2"/>
            </svg>          
            <span className={styles.label}>Suggested</span>
          </button>
        </li>
        <li className={styles.nav_list_item}>
          <button>
            Confident
          </button>
        </li>
        <li className={styles.nav_list_item}>
          <button>
            Uncertain
          </button>
        </li>
        <li className={styles.nav_list_item}>
          <button>
            Speculative
          </button>
        </li>
      </ul>
    </nav>
  )
}
