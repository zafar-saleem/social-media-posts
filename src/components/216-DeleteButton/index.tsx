"use client";

import React from "react";
import styles from "./styles.module.css";

export const DeleteButton = () => {
  const [counter, setCounter] = React.useState<any>(9);
  const [isClicked, setIsClicked] = React.useState(false);

  React.useEffect(() => {
    if (!isClicked) return setCounter(9);

    let interval;
    
    if (counter <= 0) {
      return clearInterval(interval);
    }

    interval = setInterval(() => {
      setCounter((prev) => {
        return prev - 1;
      })
    }, 1000);

    return () => clearInterval(interval);

  }, [isClicked, counter]);

  return (
    <label className={styles.button}>
      <input
        type="checkbox"
        className={styles.input}
        onChange={() => {
          setIsClicked(!isClicked);
        }}
      />
      <span className={`${styles.initial_label} ${styles.label}`}>Delete</span>
      <span className={`${styles.pending_label} ${styles.label} ${counter === 0 && styles.done}`}>Cancel</span>
      <span className={`${styles.done_label} ${styles.label} ${counter === 0 && styles.done}`}>Deleted</span>
      <span className={`${styles.icon} ${counter === 0 && styles.done}`}>
        <svg
          width="14" height="14"
          viewBox="0 0 24 24" fill="none" stroke="rgb(250 43 55)" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          className="lucide lucide-trash2-icon lucide-trash-2">
            <path d="M10 11v6"/><path d="M14 11v6"/>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/>
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          </svg>
      </span>
      <span className={`${styles.counter} ${counter === 0 && styles.done}`}>{counter}</span>
    </label>
  )
}