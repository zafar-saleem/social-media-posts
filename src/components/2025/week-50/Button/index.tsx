"use client";

import React from "react";
import styles from "./styles.module.css";

export const DownloadButton = ({ label }: any) => {
  const [click, setClick] = React.useState(false);

  return (
    <button
      className={`${styles.button} ${click && styles.active}`}
      onClick={() => setClick(!click)}
    >
      <span className={styles.icon}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgb(218 245 255)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-arrow-down-to-line-icon lucide-arrow-down-to-line ${styles.button_icon}`}>
            <path d="M12 17V3" className={styles.button_arrow} />
            <path d="m6 11 6 6 6-6" className={styles.button_arrow} />
            <path d="M19 21H5"/>
        </svg>
        <svg 
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgb(218 245 255)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-check-icon lucide-check ${styles.icon_tick}`}>
            <path d="M20 6 9 17l-5-5"/>
        </svg>
      </span>
      <span>{label}</span>
    </button>
  )
}